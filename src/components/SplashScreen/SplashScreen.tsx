import { getBasePath } from '@/utils/utils';
import React from 'react';
import { BackgroundRadialLeft } from '../BackgroundRadialLeft';
import { BackgroundRadialRight } from '../BackgroundRadialRight';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-violetaoscuro z-50">
        <BackgroundRadialLeft/>
      <img 
        src={`${getBasePath()}/assets/loader.gif`} 
        alt="SplashScreen" 
        className="max-w-full max-h-full"
      />
        <BackgroundRadialRight/>
    </div>
  );
};

export default SplashScreen;
