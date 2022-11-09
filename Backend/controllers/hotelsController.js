

//----------All hotel-----------
exports.getHotels = (req,res)=>{
    res.status(200).json({
    success:true,
    message:'affichage de tous les hotels'
    })
    }
//-------------one hotel---------
exports.getHotel = (req,res)=>{
    var id = req.params.id 
    res.status(200).json({
    success:true,
    message:"affichage d'un seul hotel par id="+id
    })
}