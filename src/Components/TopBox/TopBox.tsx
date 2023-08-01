import { topDealUsers } from "../../data"
import "./TopBox.scss"

const TopBox = () => {
  return (
    <div className="TopBox">
        <h1>Top Deals</h1>
        <div className="list">

        {
            topDealUsers.map((item) => {
                return (
                    <div className="listItem" key={item.id}>
                        <div className="user">
                            <img src={item.img} alt="" />
                            <div className="userTexts">
                                <span className="username">{item.username}</span>
                                <span className="useremail">{item.email}</span>
                            </div>
                        </div>
                        <span className="amount">${item.amount}</span>
                    </div>
                    )
                })
            }
            </div>
    </div>
  )
}

export default TopBox