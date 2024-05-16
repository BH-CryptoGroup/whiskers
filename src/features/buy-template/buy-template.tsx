import { useNavigate } from 'react-router-dom';
import { Heading } from '../../shared/components/heading';
import { Logo } from '../../shared/components/logo';
import styles from './but-template.module.scss';
import { BUY_ROWS_DATA } from './constants';
import { BuyTokenRow } from '../../entities/buy-token-row/but-token-row';
import { Typography } from '../../shared/components/typography';
import { Button } from '../../shared/components/button';
import { useMediaQuery } from 'react-responsive';

export const BuyTemplate = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

    const onNavigateToMainScreen = () => {
        navigate('/whiskers');
    };

    return (
        <div className={styles.buy__wrapper}>
            <div className={styles.buy__container}>
                <div className={styles.buy__title_and_logo}>
                    <Logo onClick={onNavigateToMainScreen} fontSize={'42px'} />
                    <span className={styles.buy__title}>
                        <Heading className={styles.buy__heading} level="h1">
                            Spin&Earn
                        </Heading>
                    </span>
                </div>
                <Typography fontSize={'16px'} fontFamily="Montserrat, sans-serif">
                    Buy bonus spins with WHISK
                </Typography>
                <div className={styles.buy__buy_rows}>
                    {BUY_ROWS_DATA &&
                        BUY_ROWS_DATA.map((buyRow) => (
                            <BuyTokenRow id={buyRow.id} countSpin={buyRow.countSpins} countWhisk={buyRow.countWhisks} />
                        ))}
                </div>
                <div className={styles.buy__balance}>
                    <Typography fontSize={'16px'} fontFamily="Montserrat, sans-serif">
                        Wallet balance
                    </Typography>
                    <Typography fontSize={'18px'} fontFamily="Montserrat, sans-serif">
                        1.345.584 WHISK
                    </Typography>
                </div>
                <div className={styles.buy__footer_connect}>
                    <div className={styles.buy__footer_connect_container}>
                        <div className={styles.buy__footer_connect_score}>
                            <Typography fontSize={isMobile ? '18px' : '40px'}>Unclaimed whisk</Typography>
                            <div className={styles.buy__footer_connect_tokens}>
                                <Typography
                                    fontSize={isMobile ? '30px' : '50px'}
                                    fontFamily="Roundy Rainbows, sans-serif"
                                >
                                    2500
                                </Typography>
                                <Button
                                    fontFamily={'Montserrat, sans-serif'}
                                    height={isMobile ? '24px' : '42px'}
                                    fontSize={isMobile ? '16px' : '40px'}
                                    backgroundColor="#0080bb"
                                    text={'Claim tokens'}
                                    fontWeight={'normal'}
                                    width={'fit-content'}
                                    textTransform={'none'}
                                    borderRadius="24px"
                                />
                            </div>
                        </div>
                        <div className={styles.buy__footer_connect_wallet}>
                            <Typography fontSize={isMobile ? '16px' : '50px'} fontFamily="Montserrat, sans-serif">
                                EQCO..P0zX
                            </Typography>
                            <Typography fontSize={isMobile ? '14px' : '50px'} fontFamily="Montserrat, sans-serif">
                                Disconnect
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
