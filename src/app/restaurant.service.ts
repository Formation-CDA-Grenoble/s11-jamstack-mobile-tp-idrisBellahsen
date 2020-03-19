import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import Restaurant from '../models/Restaurant';

const query = `
query MyQuery {
  allRestaurants {
   
    address
    description
    name
    phone
    image {
      url
    }
  }
}
`;

interface AllRestaurantsRequest {
  data: {
    allRestaurants: Restaurant[],
  }
}


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  datoCmsApiToken: string = environment.DATOCMS_API_TOKEN;

  getRestaurants(): Observable<AllRestaurantsRequest> {
    return this.http.post<AllRestaurantsRequest>(
      'https://graphql.datocms.com/',
      { query },
      {
        headers: {
          Authorization: this.datoCmsApiToken,
        }
      }
    );
  }

}
