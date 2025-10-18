function Personal (){
    return(
        <>
        <section>
            <h2 class="text-center m-2">Personal favorites and dislikes</h2>
            <p class="text-center m-4">Alphonso and Dylan decided to hand select the songs they like and dislike just incase you cared to know their opinion on the top 50</p>
        </section>

        <section className="container" >
            <div className="row">
                <div className="d-grid col-6">
                    <h2 className="text-center ">Songs that are good</h2>
                    <button className ="btn btn-success m-1 d-grid">Good</button>
                    <p className ="text-center">this is the placeholder where the list will populate and grkjlfsdgjkl;sfjgdk;lj;lksfdg;jklfgsd;jklfgdsj;lkfsdg;jlksdfgkj;ldfsgjkl;fgsdjk;lfdsgjk;lfgds;jklfdgs</p>
                </div>
                <div className = "d-grid col-6">
                    <h2 className="text-center ">Songs that are terrible</h2>
                    <button className ="btn btn-danger m-1 d-grid">Terrible</button>
                    <p className ="text-center">this is the placeholder where the list will populate and grkjlfsdgjkl;sfjgdk;lj;lksfdg;jklfgsd;jklfgdsj;lkfsdg;jlksdfgkj;ldfsgjkl;fgsdjk;lfdsgjk;lfgds;jklfdgs</p>
                </div>
            </div>

        </section>
        </>
    )
}

export default Personal