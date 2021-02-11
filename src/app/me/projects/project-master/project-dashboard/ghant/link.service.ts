import {Injectable} from "@angular/core";
import {Link} from "./link";

@Injectable()
export class LinkService {
    get(): Promise<Link[]> {
        return Promise.resolve([
            {id: 1, source: 1, target: 2, type: "0"}
        ]);
    }
}