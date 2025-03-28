import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <>
            <p className='subheading'>Default</p>
            <p className='path'>Home {">"} Dashboard {">"} Defualt</p>
            <div className="dashcontainer">
                <div className='column'>
                    <div className='card'>
                        <p className='cardHead'>Daily Sales</p>
                        <div className='cardDetails'>
                            <div className='cardLeft'>
                                <img className="cardIcon" src="src/assets/arrow-up.png" alt="" />
                                <p className='amount'>$ 249.95</p>
                            </div>
                            <p className='percentage'>100%</p>
                        </div>
                        <div className='progressBackgroundPrimary'>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <p className='cardHead'>Monthly Sales</p>
                        <div className='cardDetails'>
                            <div className='cardLeft'>
                                <img className="cardIcon" src="src/assets/arrow-down.png" alt="" />
                                <p className='amount'>$ 249.95</p>
                            </div>
                            <p className='percentage'>100%</p>
                        </div>
                        <div className='progressBackgroundSecondary'>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <p className='cardHead'>Yearly Sales</p>
                        <div className='cardDetails'>
                            <div className='cardLeft'>
                                <img className="cardIcon" src="src/assets/arrow-up.png" alt="" />
                                <p className='amount'>$ 249.95</p>
                            </div>
                            <p className='percentage'>100%</p>
                        </div>
                        <div className='progressBackgroundPrimary'>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialSection">
                <div className='column'>
                    <div className='socialcard'>
                        <div className='upperPart'>
                            <img className="socialIcon" src="src/assets/twitter.png" alt="" />
                            <div className='likeValues'>
                                <p className='likes'>12281</p>
                                <div className='likeContent'>
                                    <p className='percentageLike'>+7.2%</p>
                                    <p className='totalLike'>Total Likes</p>
                                </div>
                            </div>
                        </div>
                        <hr className='socialDivider' />
                        <div className='lowerPart'>
                            <div className='socialLowerPart'>
                                <div style={{ display: 'flex' }}>
                                    <div className='target'>Target:</div>
                                    <div className='targetValue'>35,098</div>
                                </div>
                                <div className='progressBarPrimary'>
                                </div>
                            </div>
                            <div className='socialLowerPart'>
                                <div style={{ display: 'flex' }}>
                                    <div className='target'>Duration:</div>
                                    <div className='targetValue'>350</div>
                                </div>
                                <div className='progressBarUniq'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='socialcard'>
                        <div className='upperPart'>
                            <img className="socialIcon" src="src/assets/facebook.png" alt="" />
                            <div className='likeValues'>
                                <p className='likes'>12281</p>
                                <div className='likeContent'>
                                    <p className='percentageLike'>+7.2%</p>
                                    <p className='totalLike'>Total Likes</p>
                                </div>
                            </div>
                        </div>
                        <hr className='socialDivider' />
                        <div className='lowerPart'>
                            <div className='socialLowerPart'>
                                <div style={{ display: 'flex' }}>
                                    <div className='target'>Target:</div>
                                    <div className='targetValue'>35,098</div>
                                </div>
                                <div className='progressBarPrimary'>
                                </div>
                            </div>
                            <div className='socialLowerPart'>
                                <div style={{ display: 'flex' }}>
                                    <div className='target'>Duration:</div>
                                    <div className='targetValue'>350</div>
                                </div>
                                <div className='progressBarSecondary'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='socialcard'>
                        <div className='upperPart'>
                            <img className="socialIcon" src="src/assets/google-plus.png" alt="" />
                            <div className='likeValues'>
                                <p className='likes'>12281</p>
                                <div className='likeContent'>
                                    <p className='percentageLike'>+7.2%</p>
                                    <p className='totalLike'>Total Likes</p>
                                </div>
                            </div>
                        </div>
                        <hr className='socialDivider' />
                        <div className='lowerPart'>
                            <div className='socialLowerPart'>
                                <div style={{ display: 'flex' }}>
                                    <div className='target'>Target:</div>
                                    <div className='targetValue'>35,098</div>
                                </div>
                                <div className='progressBarPrimary'>
                                </div>
                            </div>
                            <div className='socialLowerPart'>
                                <div style={{ display: 'flex' }}>
                                    <div className='target'>Duration:</div>
                                    <div className='targetValue'>350</div>
                                </div>
                                <div className='progressBarSecondary'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='endcontainer'>
                <div className='ratingColumn'>
                    <div className='ratingCard'>
                        <div className='cardHead' style={{ paddingLeft: 16, paddingTop: 16 }}>Rating</div>
                        <hr className='socialDivider' />
                        <div style={{ padding: 20 }}>
                            <div className='partRating'>
                                <div style={{ display: 'flex' }}>
                                    <div className='mainRating'>4.7</div>
                                    <img src="src/assets/star.png" className='star' alt="" />
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div className='ratingValue'>0.4</div>
                                    <img src="src/assets/triagle-arrow-up.png" className='triagleArrow' alt="" />
                                </div>
                            </div>
                            <div className='partRating'>
                                <div style={{ display: 'flex' }}>
                                    <img src="src/assets/star.png" className='starRating' alt="" />
                                    <div className='ratingValue'>5</div>
                                </div>
                                <div>
                                    <div className='ratingValue'>384</div>
                                </div>
                            </div>
                            <div className='progressBarRating'>
                            </div>
                            <div className='partRating'>
                                <div style={{ display: 'flex' }}>
                                    <img src="src/assets/star.png" className='starRating' alt="" />
                                    <div className='ratingValue'>4</div>
                                </div>
                                <div>
                                    <div className='ratingValue'>384</div>
                                </div>
                            </div>
                            <div className='progressBarRating'>
                            </div>
                            <div className='partRating'>
                                <div style={{ display: 'flex' }}>
                                    <img src="src/assets/star.png" className='starRating' alt="" />
                                    <div className='ratingValue'>3</div>
                                </div>
                                <div>
                                    <div className='ratingValue'>384</div>
                                </div>
                            </div>
                            <div className='progressBarRating'>
                            </div>
                            <div className='partRating'>
                                <div style={{ display: 'flex' }}>
                                    <img src="src/assets/star.png" className='starRating' alt="" />
                                    <div className='ratingValue'>2</div>
                                </div>
                                <div>
                                    <div className='ratingValue'>384</div>
                                </div>
                            </div>
                            <div className='progressBarRating'>
                            </div>
                            <div className='partRating'>
                                <div style={{ display: 'flex' }}>
                                    <img src="src/assets/star.png" className='starRating' alt="" />
                                    <div className='ratingValue'>1</div>
                                </div>
                                <div>
                                    <div className='ratingValue'>384</div>
                                </div>
                            </div>
                            <div className='progressBarRating'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='userCardColumn'>
                    <div className='recentUserCard'>
                        <div className='cardHead' style={{ paddingLeft: 16, paddingTop: 16 }}>Recent Users</div>
                        <hr className='socialDivider' />
                        <div>
                            <div className='userCard'>
                                <div className='avatarBackground'>
                                    <img src="src/assets/woman.png" className='avatar' alt="" />
                                </div>
                                <div>
                                    <div className='userName'>Isebella Christensen</div>
                                    <div className='details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi corrupti a nobis consequuntur alias nihil? Repellat consequatur pariatur, eligendi cupiditate molestiae tenetur ratione porro distinctio libero a provident ducimus.</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='available'></div>
                                    <div className='userDateTime'>11 MAY 12:56</div>
                                </div>
                                <div className='buttonAlign'>
                                    <button className='rejectButton'>Reject</button>
                                    <button className='approveButton'>Approve</button>
                                </div>
                            </div>
                            <hr className='socialDivider' />
                            <div className='userCard'>
                                <div className='avatarBackground'>
                                    <img src="src/assets/man.png" className='avatar' alt="" />
                                </div>
                                <div>
                                    <div className='userName'>Isebella Christensen</div>
                                    <div className='details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi corrupti a nobis consequuntur alias nihil? Repellat consequatur pariatur, eligendi cupiditate molestiae tenetur ratione porro distinctio libero a provident ducimus.</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='available'></div>
                                    <div className='userDateTime'>11 MAY 12:56</div>
                                </div>
                                <div className='buttonAlign'>
                                    <button className='rejectButton'>Reject</button>
                                    <button className='approveButton'>Approve</button>
                                </div>
                            </div>
                            <hr className='socialDivider' />
                            <div className='userCard'>
                                <div className='avatarBackground'>
                                    <img src="src/assets/woman.png" className='avatar' alt="" />
                                </div>
                                <div>
                                    <div className='userName'>Isebella Christensen</div>
                                    <div className='details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi corrupti a nobis consequuntur alias nihil? Repellat consequatur pariatur, eligendi cupiditate molestiae tenetur ratione porro distinctio libero a provident ducimus.</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='available'></div>
                                    <div className='userDateTime'>11 MAY 12:56</div>
                                </div>
                                <div className='buttonAlign'>
                                    <button className='rejectButton'>Reject</button>
                                    <button className='approveButton'>Approve</button>
                                </div>
                            </div>
                            <hr className='socialDivider' />
                            <div className='userCard'>
                                <div className='avatarBackground'>
                                    <img src="src/assets/man.png" className='avatar' alt="" />
                                </div>
                                <div>
                                    <div className='userName'>Isebella Christensen</div>
                                    <div className='details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi corrupti a nobis consequuntur alias nihil? Repellat consequatur pariatur, eligendi cupiditate molestiae tenetur ratione porro distinctio libero a provident ducimus.</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='available'></div>
                                    <div className='userDateTime'>11 MAY 12:56</div>
                                </div>
                                <div className='buttonAlign'>
                                    <button className='rejectButton'>Reject</button>
                                    <button className='approveButton'>Approve</button>
                                </div>
                            </div>
                            <hr className='socialDivider' />
                            <div className='userCard'>
                                <div className='avatarBackground'>
                                    <img src="src/assets/woman.png" className='avatar' alt="" />
                                </div>
                                <div>
                                    <div className='userName'>Isebella Christensen</div>
                                    <div className='details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi corrupti a nobis consequuntur alias nihil? Repellat consequatur pariatur, eligendi cupiditate molestiae tenetur ratione porro distinctio libero a provident ducimus.</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='available'></div>
                                    <div className='userDateTime'>11 MAY 12:56</div>
                                </div>
                                <div className='buttonAlign'>
                                    <button className='rejectButton'>Reject</button>
                                    <button className='approveButton'>Approve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomeScreen;