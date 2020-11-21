import { from } from 'rxjs'
import {flatMap, map} from "rxjs/internal/operators";

export type Photo = {thumbnailUrl: string, title: string}

// export interface Photo {
//     thumbnailUrl: string;
//     title: string
// }

export function getPhoto() {
    return from(fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`))
        .pipe(
            flatMap(res => res.json()),
            map(data => data as Photo[])
        )
        .toPromise()
}
