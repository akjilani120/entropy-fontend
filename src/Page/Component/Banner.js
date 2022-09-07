import React from 'react';
const Banner = () => {

    return (
        <div>
           <div className='banner-main'>
           <video loop autoPlay muted className='video-banner'>
                <source
                    src="https://player.vimeo.com/external/524798492.sd.mp4?s=adec0bcd7c5fedd2e9360bab97eab892468113ec&profile_id=164&oauth2_token_id=57447761"
                    type="video/mp4"
                />
                
            </video>
            <div className='banner-title'>
               <h1 className='text-white'>Let The Beauty Of What You Love Be What You Do</h1>
               <p className='banner-title-pera my-4'> <button className='btn btn-outline-warning'>Life Style</button> <span>Hisam gerebar</span> <span>  Septembar 2, 2022</span> <span> No comment</span> <span>  4 min Read</span> </p>
               <p className='text-white pe-5'>When people learn that I’m a writer, more than half of them will immediately tell me about how they have an idea for a book, or that they need an editor for their autobiography, or that, though it sounds crazy, they are certain they have this one idea that would be a mega bestseller. Like, one of the biggest books in the world.</p>
            </div>
           </div>
        </div>
    );
};

export default Banner;