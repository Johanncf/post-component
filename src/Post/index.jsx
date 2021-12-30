import { IconContext } from "react-icons";
import { GoKebabVertical } from "react-icons/go";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import "./style.css"

export default function Post({ user, photo, date, children }) {

    const [like, setLike] = useState(true)

    return (
        <section className="post_container">
            <header className="post_header">
                <div className="user">
                    <div className='user_photo-border'>
                        <div className='user_photo' style={{ backgroundImage: `url(${user.photo})` }}></div>
                    </div>
                    <div className='user_infos'>
                        <h4 className='name'>{user.name}</h4>
                        <span className='date'>{date}</span>
                    </div>
                </div>

                <div className="menu_button">
                    <GoKebabVertical />
                </div>
            </header>
            <article className="post_content">
                <p className="post_text">{children}</p>
                <img src={photo} alt='post' className="post-image" />
            </article>
            <div className="actions">
                <div className="likes-comments_container">
                    <button className="like" onClick={() => setLike(current => !current)}>
                        <IconContext.Provider value={{ color: "red", className: "like" }}>
                            <div className="icon_container">
                                {
                                    like ? <FaRegHeart /> : <FaHeart />
                                }
                            </div>
                        </IconContext.Provider>
                    </button>
                    <button className="comment">Comments</button>
                </div>
                <div className="share_container">
                    <button className="share">Share</button>
                </div>
            </div>
        </section>
    );
}