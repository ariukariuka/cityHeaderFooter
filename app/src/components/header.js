import React from 'react'
import './header.css'
const Header = () => {
    return(
       <div>
            <div className=''>
                <div className='w-full'>
                    <div className='top-header w-full bg-[#f9f9f9]'>
                        <div className='max-w-[1400px] mx-auto flex justify-between py-[0.3rem] items-center'>
                            <div>
                                <div>
                                    <h1 className='text-[14px]'>Тавтай морилно уу</h1>
                                </div>
                            </div>
                            <div className='flex gap-[20px]'>
                                <div className='top-s'>
                                    <span>7575-7599</span>
                                </div>
                                <div className='top-s'>
                                    <span>eshop@citycomputer.mn</span>
                                </div>
                                <div className='top-s'>
                                    <span>Хаяг, байршил</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='middle-header max-w-[1400px] py-[1rem]  mx-auto'>
                        <div className='w-full flex items-center justify-between'>
                            <div>
                                <div className='w-[350px] h-[110px]'>
                                    <img src='https://citycomputer.cody.mn/72248a8895061372987c4d7bec75780d.svg' className='w-full h-full' alt='' />
                                </div>
                            </div>
                            <div className=''>
                                <div>
                                    <div className='w-[550px]'>
                                        <input type='text' className='bg-[url("https://citycomputer.cody.mn/b5ce2c01724678a7660ab8be9ee5f2d3.svg")] pl-[48px] p-[14px] bg-[#f9f9f9] bg-size1 w-full h-[52px] bg-cover bg-no-repeat outline-none' placeholder='Эндээс бүхнийг хайж олох' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-[20px]'>
                                <div className='w-[50px]'>
                                    <a href='/'>
                                        <div className='w-full flex justify-center'>
                                                
                                                <img src='https://citycomputer.cody.mn/e64585d13a919b4bff91424c463733cb.svg' alt='' />
                                        
                                        </div>
                                        <div>
                                            <h1 className='text-center pt-[3px] text-[14px]'>Сагс</h1>
                                        </div>
                                    </a>
                                    
                                </div>
                                <div className='w-[50px]'>
                                    <a href='/'>
                                        <div className='w-full flex justify-center'>
                                                
                                                <img src='https://citycomputer.cody.mn/5c68d9e2df833a63b9c289b45174371b.svg' alt='' />
                                        
                                        </div>
                                        <div>
                                            <h1 className='text-center pt-[3px] text-[14px]'>Сагс</h1>
                                        </div>
                                    </a>
                                    
                                </div>
                                <div className='w-[50px]'>
                                    <a href='/'>
                                        <div className='w-full flex justify-center'>
                                                
                                                <img src='https://citycomputer.cody.mn/075577db15f4e3ca8d7145e443b975fe.svg' alt='' />
                                        
                                        </div>
                                        <div>
                                            <h1 className='text-center pt-[3px] text-[14px]'>Сагс</h1>
                                        </div>
                                    </a>
                                    
                                </div>
                                <div className='w-[50px]'>
                                    <a href='/'>
                                        <div className='w-full flex justify-center'>
                                                
                                                <img src='https://citycomputer.cody.mn/e7900e3b07ac8245ff6de1d762989a42.svg' alt='' />
                                        
                                        </div>
                                        <div>
                                            <h1 className='text-center pt-[3px] text-[14px]'>Сагс</h1>
                                        </div>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-menu  w-full bg-[#de1212]'>
                            <div className=' mx-auto max-w-[1400px]'>
                                <div className='w-full flex items-center gap-[30px]'>
                                    <button>
                                        <div className='w-[50px] h-[40px] justify-center flex items-center bg-[#fff] rounded-[10px]'>
                                            <div className=''>
                                                <div className='hamburger-line'></div>
                                                <div className='hamburger-line'></div>
                                                <div className='hamburger-line'></div>
                                            </div>
                                            
                                        </div>
                                    </button>
                                    <div>
                                        <div className='menu'>
                                            <ul className=''>
                                                <li>
                                                    <a href='/'>
                                                    Гар утас таблет аксессуар
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
       </div>
    )
} 
export default Header