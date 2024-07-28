import React from 'react'

const VolumeContest = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='text-center text-[#aff57d] text-[50px] md:text-[60px] mt-[30px] leading-[45px] poetsen-one-regular'>LockyFi Token<br/>Volume Contest</div>

            <div className='w-[95%] md:w-[60%] text-center mt-[20px] leading-6'>
                <strong className='text-[#aff57d]'>
                LockyFi </strong>is excited to announce a new contest for token communities!<br/>
                The token with the highest trading volume on your platform will win 100% of the swap fees
                generated on <strong className='text-[#aff57d]'>LockyFi</strong>. These funds will be used to buy the winning token and distribute it
                via an airdrop to the community.
            </div>

            <div className='flex justify-center items-center w-[90%] h-[270px] md:w-[60%] bg-gradient-to-r from-[#aff57d] to-[#3d5b27] rounded-[10px] mt-[60px] relative'>
                <div className='flex flex-col justify-center gap-4 w-[99.5%] h-[269px] px-[40px] md:w-[99.8%] bg-[black] rounded-[10px] leading-5'>
                    <div className='flex justify-center items-center w-full'>
                        <button className='absolute top-[-34px] flex justify-center items-center bg-gradient-to-r from-[#aff57d] to-[#598838] text-[black] p-[20px] w-[250px] h-[45px] rounded-[5px] poetsen-one-regular'>HOW IT WORKS</button>
                    </div>

                        <div>
                            <strong className='text-[#aff57d]'>1. Trade and Win</strong><br/>
                            The token with highest volume at the end of the contest wins.
                        </div>
                        <div>
                            <strong className='text-[#aff57d]'>2. Earn Swap Fees</strong><br/>
                            The winning token earns 100% of the swap fees generated during the contest.
                        </div>
                        <div>
                            <strong className='text-[#aff57d]'>3. Airdrop</strong><br/>
                            we buy the winning token with the sawp fees and airdrop it to the community.
                        </div>
                </div>
            </div>

            <div className='flex justify-center items-center w-[90%] h-[270px] md:w-[60%] bg-gradient-to-r from-[#aff57d] to-[#3d5b27] rounded-[10px] mt-[60px] relative'>
                <div className='flex flex-col justify-center gap-4 px-[40px] w-[99.5%] h-[269px] md:w-[99.8%] bg-[black] rounded-[10px] leading-5'>
                    <div className='flex justify-center items-center'>
                        <button className='absolute top-[-34px] flex justify-center items-center bg-gradient-to-r from-[#aff57d] to-[#598838] text-[black] p-[20px] w-[250px] h-[45px] rounded-[5px] poetsen-one-regular'>HOW TO PARTICIPATE</button>
                    </div>

                        <div>
                            <strong className='text-[#aff57d]'>1. Trade on LockyFi</strong><br/>
                                Encourage your community to trade your token on LockyFi.
                        </div>
                        <div>
                            <strong className='text-[#aff57d]'>2. Spred the Word</strong><br/>
                                Promote the contest on social media and within your community.
                        </div>
                        <div>
                            <strong className='text-[#84c54c]'>3. Track Progress</strong><br/>
                                Monitor real-time volume tracking on your website.
                        </div>
                </div>
            </div>

            <div className='flex justify-center items-center mt-[30px]'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[#aff57d] text-[30px] poetsen-one-regular'>JOIN NOW!</p>
                        <p className='text-center leading-6'>Boost your token's visibility and reward your<br/> community with LockyFi</p>
                        <strong>Happy Trading!</strong>
                        <p>The LockyFi Team</p>
                </div>
            </div>
    </div>
  )
}

export default VolumeContest