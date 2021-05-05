import React from 'react'
import { Link } from "react-router-dom"
function blog() {
    return (
        <div className="blog">
            <h1 className="heading"> <span>#</span>blogs</h1>

            <div className="blogsDiv">

                <div className="item  blog1">
                    <h3>Dec 15 · 6 min read</h3>
                    <h1><span>#</span>Laborum quis aute deserunt</h1>

                    <div className="blogpara"> <p> Adipisicing elit nostrud commodo anim. In ut et ad cupidatat. Consequat ipsum mollit et excepteur. Minim incididunt ex dolor cupidatat....<span><Link to="./blog1">Read More</Link></span></p>
                    </div>
                </div>

                <div className="item blog2">
                    <h3>Dec 30 · 10 min read</h3>
                    <h1><span>#</span>Amet nulla esse fugiat veniam Lorem.</h1>

                    <div className="blogpara"> <p> Labore laboris aute incididunt culpa. Quis enim qui duis commodo. Quis velit Lorem sunt culpa. Ut sit nisi incididunt ipsum. Nostrud fugiat reprehenderit reprehenderit esse....<span><Link to="./blog2">Read More</Link></span></p>
                    </div>
                </div>

                <div className="item blog3">
                    <h3>Oct · 5 min read</h3>
                    <h1><span>#</span>Veniam nostrud non enim enim deserunt.</h1>

                    <div className="blogpara"> <p> Sint duis proident dolor incididunt. Velit in proident tempor non. Duis aute ipsum tempor voluptate. Dolore labore aute elit cupidatat. Est est in pariatur anim....<span><Link to="./blog3">Read More</Link></span></p>
                    </div>
                </div>

                <div className="item blog4">
                    <h3>Oct 19 · 8 min read</h3>
                    <h1><span>#</span>Minim nisi excepteur pariatur minim tempor culpa.</h1>

                    <div className="blogpara"> <p> Quis aliqua consectetur officia ex. Et ex sunt ullamco occaecat. Pariatur aliquip deserunt fugiat reprehenderit. Sint consectetur elit ex officia....<span><Link to="./blog4">Read More</Link></span></p>
                    </div>
                </div>

                <div className="item blog5">
                    <h3>Nov 5 · 4 min read</h3>
                    <h1><span>#</span>Laboris fugiat mollit commodo pariatur.</h1>

                    <div className="blogpara"> <p> Elit cillum occaecat minim voluptate. Fugiat amet exercitation adipisicing occaecat. Et consequat officia velit aliquip. Do nulla est ut excepteur....<span><Link to="./blog5">Read More</Link></span></p>
                    </div>
                </div>

                <div className="item blog6">
                    <h3>Nov 13 · 6 min read</h3>
                    <h1><span>#</span>Officia esse non deserunt cillum minim</h1>

                    <div className="blogpara"> <p> Pariatur magna occaecat tempor cillum. Nostrud dolor non esse deserunt. Ea ullamco aute aliqua occaecat. Ipsum occaecat consequat nostrud eu....<span><Link to="./blog6">Read More</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default blog
