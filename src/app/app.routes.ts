import { Routes } from '@angular/router';
import { TailwindpageComponent } from './pages/tailwindpage/tailwindpage.component';
import { ControlFlowComponent } from './pages/tailwindpage/pages/control-flow/control-flow.component';
import { DeferOptionsComponent } from './pages/tailwindpage/pages/defer-options/defer-options.component';

export const routes: Routes = [
    {
        path: 'tailwind',
        component: TailwindpageComponent
    },
    {
path: 'control-flow',
component: ControlFlowComponent
    },
    {
path: 'defer-options',
component: DeferOptionsComponent
    },
    {
        path: '**',
        redirectTo: 'tailwind',
        pathMatch: 'full'
    }
];
