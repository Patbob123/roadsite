
import { FadeInSection } from './FadeinSection.js';
import { InfoBox } from './InfoBox.js';
import { Father } from './Father.js';

export function About() {
    return (
        <>
            <div id="about" className='z-[3] absolute top-0 text-subtextcol w-full h-full'>
                <div className='p-8 h-full'>
                    <Father top="500" left="700" width="100" height="100" />
                    <InfoBox title="Tent" top="350" left="120" width="200" height="100">
                        Basic Shelter, symbol of rest and safety
                    </InfoBox>

                    <InfoBox title="Campfire"top="400" left="525" width="100" height="100">
                        ASDAS DASDASDAS DASDDASDA
                        ASDASD ASDASDASD ASDDA SDAASDAS

                        ASDASD
                    </InfoBox>

                    <InfoBox title="Campfire" top="700" left="190" width="200" height="100">
                        A cozy campfire A cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfire
                    </InfoBox>

                    <InfoBox title="Campfire" top="350" left="120" width="200" height="100">
                        A cozy campfire A cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfire
                    </InfoBox>

                    <InfoBox title="Campfire" top="350" left="120" width="200" height="100">
                        A cozy campfire A cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfire
                    </InfoBox>

                    <InfoBox title="Campfire" top="350" left="120" width="200" height="100">
                        A cozy campfire A cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfireA cozy campfire
                    </InfoBox>

                    <InfoBox top="200" left="300" width="100" height="100" />
                </div>
            </div>
        </>
    );
}
