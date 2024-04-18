import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react'

import { classNames } from 'functions'
import { BLACK, BLUE, WHITE } from 'config'
import formatAddress from 'functions/formatAddress'
import Typography from '../Typography'

import BarsIcon from 'components/Icons/BarsIcon'
import CloseIcon from 'components/Icons/CloseIcon'
import DownIcon from 'components/Icons/DownIcon'
import RightIcon from 'components/Icons/RightIcon'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

const SideBar = () => {
    const router = useRouter()
    const { open } = useWeb3Modal()
    const { account } = useActiveWeb3React()
    const [showMenu, setShowMenu] = useState(false)
    const [showMore, setShowMore] = useState(false)

    const isConnected = account ? true : false

    const homeRoute = useCallback(() => {
        setShowMenu(false)
        router.push(`/`)
    }, [])
    const swapRoute = useCallback(() => {
        setShowMenu(false)
        router.push(`/`)
    }, [])
    const docsRoute = useCallback(() => {
        setShowMenu(false)
        router.push(`https://example.com/`)
    }, [])
    const twitterRoute = useCallback(() => {
        setShowMenu(false)
        router.push(`https://x.com/`)
    }, [])

    const swapPage = router.pathname.startsWith('/swap')
    const homePage = router.pathname.endsWith('/')
    const isSwap = swapPage
    const isHome = homePage

    const toggleShow = (toggleMenu) => { 
            toggleMenu ? setShowMenu(!showMenu) 
            : setShowMore(!showMore)
    }

    const Divider = () => {
        return (<div
            style={{
                border: "2px solid",
                height: "0rem",
                width: "12rem",
                marginTop: "12px",
                marginBottom: "12px",
                display: "flex",
                flexDirection: "column",
                color: WHITE,
            }}
        />
        )
    }

    return (
        <div
            // className={`fixed top-0 left-auto z-10 flex flex-row items-center justify-center w-auto rounded-xl`}
            style={{
                display: "flex",
                height: showMenu ? window.innerHeight : '3rem',
                // backgroundColor: BLUE,
            }}
        >
            <div
                className="flex items-center w-full space-x-2 justify-end"
                // onClick={() => toggleShow(true)}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    border: '3px solid',
                    borderColor: showMenu ? BLUE : WHITE,
                    backgroundColor: BLACK,
                    padding: '10px',
                    borderRadius: '10px',
                    width: '100%',
                    justifyItems: 'center',
                    alignItems: 'center',
                }}
            >
                {showMenu &&
                    <div
                        // className='absolute'
                        style={{
                            display: 'flex',
                            // top: 12,
                            // left: 0,
                            justifyContent: 'right',
                            color: BLUE,
                            width: '100%',
                        }}
                        onClick={() => toggleShow(true)}
                    >
                        {/* @ts-ignore */}
                        <CloseIcon
                            fillPrimary={WHITE}
                            fillSecondary={WHITE}
                            size={16}
                        />
                    </div>
                }
                {!showMenu &&
                    <div onClick={() => toggleShow(true)}>
                    {/* @ts-ignore */}
                    <BarsIcon
                        fillPrimary={showMenu ? `${BLUE}` : `${WHITE}`}
                        fillSecondary={showMenu ? `${WHITE}` : `${BLUE}`}
                        className={'w-7 h-7'}
                        size={24}
                    />
                    </div>
                }


                {showMenu &&
                    <div
                        className={`flex fixed bg-dark-1000 bottom-0 border-2 border-dark-800 rounded-xl left-0 z-10 gap-1 items-center justify-center w-full`}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            justifyItems: 'center',
                            alignItems: 'center',

                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: account ? "14rem" : "12rem",
                                height: "1.5rem",
                                marginBottom: "12px",
                                justifyContent: "center",
                                border: "4px solid",
                                borderColor: BLACK,
                                borderRadius: "14px",
                                color: WHITE,
                                padding: "8px",
                                backgroundColor: BLUE,
                                fontWeight: "bold",
                            }}
                            // onClick={() => open({ view: 'Networks' })}
                            onClick={
                                isConnected ? () => open({ view: 'Account' })
                                    : () => open({ view: 'Connect' })
                            }
                        >
                            {account
                                ? `${formatAddress(account ?? "")}`
                                : 'Connect Wallet'
                            }
                        </div>
                        {/* @ts-ignore */}
                        <Divider />
                        {/* @ts-ignore */}
                        {/* <Image
                            src="/assets/HeaderLogo.png"
                            height={72}
                            width={224}
                            alt="Header Logo"
                            onClick={homeRoute}
                        /> */}
                        <div
                            className={classNames(
                                `hover:border-2 hover:border-[${BLUE}] flex w-full justify-center rounded p-0.5`,
                            )}
                            onClick={homeRoute}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                                width: '95%',
                                justifyItems: 'center',
                                alignItems: 'center',
                                padding: '8px',
                                color: isHome ? BLUE : WHITE,
                                marginTop: '1.5rem',
                                marginBottom: '0.5rem',
                                borderRadius: '12px',
                                borderLeft: isHome ? '2px solid' : '',
                                borderRight: isHome ? '2px solid' : '',
                            }}
                        >
                            {/* @ts-ignore */}
                            <Typography variant="h1" color={WHITE} align="center"
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {`Home`}
                            </Typography>
                        </div>
                        <div
                            className={classNames(
                                `hover:border-2 hover:border-[${BLUE}] flex w-full justify-center rounded p-0.5`,
                                isSwap && `hover:border border-2 border-[${BLUE}]`
                            )}
                            onClick={swapRoute}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                                width: '95%',
                                justifyItems: 'center',
                                alignItems: 'center',
                                padding: '8px',
                                color: isSwap ? BLUE : WHITE,
                                marginTop: '1.5rem',
                                marginBottom: '0.5rem',
                                borderRadius: '12px',
                                borderLeft: isSwap ? '2px solid' : '',
                                borderRight: isSwap ? '2px solid' : '',
                            }}
                        >
                            {/* @ts-ignore */}
                            <Typography variant="h1" color="textPrimary" align="center"
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {`Exchange`}
                            </Typography>
                        </div>

                        {/* MORE OPTIONS */}

                        {/* @ts-ignore */}
                        <Divider />

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                // border: '1px solid',
                                padding: '0.5rem',
                                width: '100%',
                                gap: 12,
                                marginTop: 12,
                                color: WHITE,
                                backgroundColor: BLUE,
                            }}
                            onClick = { () => toggleShow(false) }
                        >
                            {!showMore ? 'SHOW MORE' : 'SHOW LESS'}
                            {!showMore ?
                                // @ts-ignore
                                <RightIcon
                                    fillPrimary={WHITE}
                                    fillSecondary={WHITE}
                                    size={16}
                                /> :
                                // @ts-ignore
                                <DownIcon
                                    fillPrimary={WHITE}
                                    fillSecondary={WHITE}
                                    size={16}
                                />
                            }
                        </div>

                        {showMore &&
                            <div
                                className={classNames(
                                    `hover:border-2 hover:border-[${BLUE}] flex w-full justify-center rounded p-0.5`,
                                )}
                                onClick={docsRoute}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 12,
                                    width: '95%',
                                    justifyItems: 'center',
                                    alignItems: 'center',
                                    padding: '8px',
                                    color: WHITE,
                                    marginTop: '1.5rem',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                {/* @ts-ignore */}
                                <Typography variant="h1" color="textPrimary" align="center"
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: WHITE,
                                    }}
                                >
                                    {`Documentation`}
                                </Typography>
                            </div>
                        }
                        {showMore &&
                            <div
                                className={classNames(
                                    `hover:border-2 hover:border-[${BLUE}] flex w-full justify-center rounded p-0.5`,
                                )}
                                onClick={twitterRoute}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 12,
                                    width: '95%',
                                    justifyItems: 'center',
                                    alignItems: 'center',
                                    padding: '8px',
                                    color: WHITE,
                                    marginTop: '0.5rem',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                {/* @ts-ignore */}
                                <Typography variant="h1" color="textPrimary" align="center"
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: WHITE,
                                    }}
                                >
                                    {`Twitter`}
                                </Typography>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}
export default SideBar