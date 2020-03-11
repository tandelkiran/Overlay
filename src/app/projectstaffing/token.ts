import { InjectionToken } from '@angular/core';

// creating an injector token for passing data to overlay 
export const PROJECT_DETAILS = new InjectionToken<{}>('PROJECT_DETAILS');
