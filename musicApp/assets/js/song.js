function song(id, name ,url , img){
    this.id = id;
    this.name = name;
    this.url = url;
    this.img = img;
    this.isSelected = true;
}


var songoperation = { 
    songsArray : [],
    addsongs : function addSongs(id,name,url,img){
        singlesong = song(id,name,url,img);
        songsArray.push(singlesong);
    },
    deletesongs : function deletesongs(id){
        var deleteitem = songsArray.filter(function(obj){
            return obj["id"] == id;
        })
        deleteitem.isSelected = !deleteitem.isSelected;
    },
    ajaxcall : function ajaxcall(){
        var promise = fetch("https://raw.githubusercontent.com/manishdevlpr88/sampleJsonFiles/master/music.json",);
        promise.then((res)=>{
            console.log(res);
            res.json().then((data)=>{
                console.log(data.songList);
                printSongs(data.songList);

            }).catch((error)=>{
                console.log(error);
            })
            // res.json.then((data)=>{
            //     console.log(data);
            // })
        }).catch((e)=>{
            console.log("not getting data");
        })
        
        
        //     method:"get",
        //     success: (e)=>{
        //             console.log(e.songList);
        //             // songsArray = e;
        //             // console.log(songsArray);
        //             // console.log(this.songsArray)
        //             // printSongs(songsArray);
        //     },
        // })   
    }
}