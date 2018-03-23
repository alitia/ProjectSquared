import firebase from '../firebase.js'

//ACTION: gets the list of projects from the db for that user
export const mpv_getprojectslist = () => {
	var ref = firebase.database().ref("projects")
    return ref.once('value')
}
//ACTION: converts result from db into project list
export const mpv_convertprojectslist = (res) => {

        var arr = []
        var count = 0
        for (var item in res){
            arr[count] = res[item]
            count++
        }
        return arr
    }