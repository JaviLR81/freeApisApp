import { Routes } from '@angular/router';
import { PokeapiComponent } from './pokeapi/pokeapi.component';



export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'pokeapi',
				component: PokeapiComponent
			}
		]
	}
];
