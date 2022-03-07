'use strict';

import { Index } from "../controllers/index/index.js";
import { AddList } from "../controllers/addlist/addlist.js";
import { ViewLists } from "../controllers/viewlists/viewlists";
import { ViewList } from "../controllers/viewlist/viewlist";
import { ViewVideo } from "../controllers/viewvideo/viewvideo";

const states = {
    Index,
    AddList,
    ViewLists,
    ViewList,
    ViewVideo
}

export { 
    states
};
