import React from 'react'
import './experiences.css'
import { BsPatchCheckFill } from "react-icons/bs";



export const Experiences = () => {
    return (
        <section id='experiences'>
            <h5>What Skills I Have</h5>
            <h2>My Experiences</h2>

            {/* ---------- BEGIN OF FRONTEND ---------- */}
            <div className="container experiences__container">
                <div className="experiences__frontend">
                    <h3>Frontend Development</h3>

                    <div className="experiences__content">
                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* ---------- END OF FRONTEND ---------- */}


                {/* ---------- BEGIN OF BACKEND ---------- */}
                <div className="experiences__backend">
                    <h3>Backend Development</h3>

                    <div className="experiences__content">
                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>NodeJS</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Upper-Intermediate</small>
                            </div>
                        </article>

                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Upper-Intermediate</small>
                            </div>
                        </article>

                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experiences__details'>
                            <BsPatchCheckFill className='experiences__details-icon'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* ---------- END OF BACKEND ---------- */}
            </div>
        </section>
    )
}
