import React from 'react'

function Blog() {
    return (
        <div className='blog  col-xm-12 col-sm-12 col-md-12 main-wrapper'>
            <section className='cta-section blog-plate theme-bg-light py-5'>
                <div className='container text-center'>
                    <h2 className='heading'>
                        Tech, Software development, Business Development, And Life
                    </h2>
                    <div className='intro'>
                        Welcome to my blog. Subscribe and be the first to get the latest post on my blog.
                    </div>
                    <div className='single-form-max-width pt-3 mx-auto'>
                        <form className='signup-form row g-2 g-lg-2 align-items-center'>
                            <div className='col-12 col-md-9'>
                                {/* <label className='sr-only' for='semail'>
                                    Your email
                                </label> */}
                                <input type='email' id='semail' 
                                name='semail' className='form-control me-md-1 semail'
                                placeholder='Enter email'
                                />
                            </div>
                            <div className='col-12 col-md-2'>
                                <button type="submit" className='btn btn-primary'>Subscribe</button>
                            </div>
                        </form>
                        {/* end of subscribe form */}
                    </div>
                </div>
            </section>
            <section className='blog-list px-3 py-5 p-md-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-4 mb-3 '>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                    src='./images/profile.jpg' alt='blogimage'/>
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title'>
                                    <a className='theme-link' href='blog-post.html'>
                                        Top 3 JavaScript Frameworks
                                    </a>
                                </h5>
                                <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.
                                </p>
                                <p className='mb-0'>
                                    <a className='text-link' href='blog-post.html'>
                                        Read more...
                                    </a>
                                </p>

                            </div>
                            <div className='card-footer'>
                                <small className='text-muted'>
                                    Published 2 days ago
                                </small>
                            </div>
                        </div>

                        <div className='col-md-4 mb-3 '>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                    src='./images/profile.jpg' alt='blogimage'/>
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title'>
                                    <a className='theme-link' href='blog-post.html'>
                                        Top 3 JavaScript Frameworks
                                    </a>
                                </h5>
                                <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.
                                </p>
                                <p className='mb-0'>
                                    <a className='text-link' href='blog-post.html'>
                                        Read more...
                                    </a>
                                </p>

                            </div>
                            <div className='card-footer'>
                                <small className='text-muted'>
                                    Published 2 days ago
                                </small>
                            </div>
                        </div>

                        <div className='col-md-4 mb-3 '>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                    src='./images/profile.jpg' alt='blogimage'/>
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title'>
                                    <a className='theme-link' href='blog-post.html'>
                                        Top 3 JavaScript Frameworks
                                    </a>
                                </h5>
                                <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.
                                </p>
                                <p className='mb-0'>
                                    <a className='text-link' href='blog-post.html'>
                                        Read more...
                                    </a>
                                </p>

                            </div>
                            <div className='card-footer'>
                                <small className='text-muted'>
                                    Published 2 days ago
                                </small>
                            </div>
                        </div>

                        <div className='col-md-4 mb-3 '>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                    src='./images/profile.jpg' alt='blogimage'/>
                            </div>
                            <div className='card-body '>
                                <h5 className='card-title'>
                                    <a className='theme-link' href='blog-post.html'>
                                        Top 3 JavaScript Frameworks
                                    </a>
                                </h5>
                                <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.
                                </p>
                                <p className='mb-0'>
                                    <a className='text-link' href='blog-post.html'>
                                        Read more...
                                    </a>
                                </p>

                            </div>
                            <div className='card-footer'>
                                <small className='text-muted'>
                                    Published 2 days ago
                                </small>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3 card-plate'>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                    src='./images/profile.jpg' alt='blogimage'/>
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title'>
                                    <a className='theme-link' href='blog-post.html'>
                                        Top 3 JavaScript Frameworks
                                    </a>
                                </h5>
                                <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.
                                </p>
                                <p className='mb-0'>
                                    <a className='text-link' href='blog-post.html'>
                                        Read more...
                                    </a>
                                </p>

                            </div>
                            <div className='card-footer'>
                                <small className='text-muted'>
                                    Published 2 days ago
                                </small>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3 '>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                    src='./images/profile.jpg' alt='blogimage'/>
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title'>
                                    <a className='theme-link' href='blog-post.html'>
                                        Top 3 JavaScript Frameworks
                                    </a>
                                </h5>
                                <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.
                                </p>
                                <p className='mb-0'>
                                    <a className='text-link' href='blog-post.html'>
                                        Read more...
                                    </a>
                                </p>

                            </div>
                            <div className='card-footer'>
                                <small className='text-muted'>
                                    Published 2 days ago
                                </small>
                            </div>
                        </div>
                    </div>
                    {/* <nav className='blog-nav nav nav-justified my-5'>
                        <a className='nav-link-prev nav-item nav-link d-none rounded-left' href='#'></a>
                    </nav> */}
                </div>
            </section>
        </div>
    )
}

export default Blog;

