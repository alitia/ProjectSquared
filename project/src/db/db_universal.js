import firebase from '../firebase.js'

//ACTION: delete the field
export const uni_deletefield = (p_id, u_id, f_id) => {    

    if(p_id === "" || u_id === "" || f_id === ""){

        console.log("unable to write data without directory path")
        return
    }
    var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/" 
    var ref = firebase.database().ref().child(path)
        ref.remove()
}

//ACTION: delete the unit
export const uni_deleteunit = (p_id, u_id) => {    

    if(p_id === "" || u_id === ""){

        console.log("unable to write data without directory path")
        return
    }
    var path = "projects/" + p_id + "/units/" + u_id + "/"
    var ref = firebase.database().ref(path)
        ref.remove()
}

//ACTION: Generates a number between 1 and 16 and assigns a colour
export const randomizeColour = () => {
    var code = ""
    var num = 0
    num = Math.floor((Math.random() * 16) + 1)
    switch(num){
        case 1:
            //red
            code = "#F67E7D"
            break;
        case 2:
            //orange
            code = "#f6a17c"
            break;
        case 3:
            //gold
            code = "#f6cb7c"
            break;
        case 4:
            //yellow
            code = "#f6e77c"
            break;
        case 5:
            //lime
            code = "#e7f67c"
            break;
        case 6:
            //green
            code = "#bdf67c"
            break;
        case 7:
            //cyan
            code = "#7cf6a4"
            break;
        case 8:
            //blue
            code = "#7cf6d5"
            break;
        case 9:
            //light blue
            code = "#7cedf6"
            break;
        case 10:
            //periblue
            code = "#7ccbf6"
            break;
        case 11:
            //purblue
            code = "#7c8ef6"
            break;
        case 12:
            //purple
            code = "#927cf6"
            break;
        case 13:
            //violet
            code = "#b47cf6"
            break;
        case 14:
            //magenta
            code = "#d77cf6"
            break;
        case 15:
            //pink
            code = "#f67ceb"
            break;
        case 16:
            //pink red
            code = "#f67cb9"
            break;
        default:
            //red
            code = "#F67E7D"
    }
    return code
}