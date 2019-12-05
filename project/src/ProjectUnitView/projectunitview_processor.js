import {uni_deleteunit} from '../db/db_universal.js'
import {puv_getprojectsunitcount} from '../db/db_projectunitview.js'

    //ACTION: delete the field then reload the page
    export const proc_deleteProceed = (p_id, u_id) => {
        uni_deleteunit(p_id, u_id)
    }    
    //ACTION: get the count of units in a project
    export const proc_getProjectsUnitCount = (p_id) => {
        return puv_getprojectsunitcount(p_id)
    }
   