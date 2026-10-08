'use client';

import Image from 'next/image';

const ExploreBtn = () => {
    return (
        <button type="button" id="explore-btn" className="px-6 py-3 rounded-full w-full sm:w-auto" onClick={() => console.log('CLICK')}>
        <a href="#events">
            Explore Events
            <img src="/icons/arrow-down.svg" alt="arrow-down" width="24" height="24" />
        </a>
        </button>
    )
}
export default ExploreBtn
