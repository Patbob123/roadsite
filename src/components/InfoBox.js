import { FadeInSection } from './FadeinSection.js';

export function InfoBox(props) {
    return (
        <>
            <div style={{ width: `${props.width}px`, height: `${props.height}px`, left: `${props.left}px`, top: `${props.top}px` }} className={`absolute`} >
                <FadeInSection>
                    <div className={`bg-subbgcol shadow-2xl transition ease-in-out p-4 flex lg:flex-col justify-between  border-2 border-bordercol rounded-2xl box-border transform md:hover:-translate-y-2 md:hover:bg-opacity-60 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200
                     md:hover:scale-1000`}>
                        <div className="flex flex-col lg:items-center lg:justify-around flex-grow">
                            <div className="text-2xs lg:text-2xs lg:text-center">{props.title}</div>
                            <div className="text-base lg:text-xs">{props.children}</div>
                        </div>
               
                    </div>
                </FadeInSection>
            </div>
        </>
    );


}
