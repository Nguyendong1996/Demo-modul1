arrThong_tin =["ID","Tên SP","Ảnh SP","Giá Nhập","Giá Bán","Số lượng"]
function thongTin_sanpham(){
    let x = prompt("nhập số lượng sản phẩm muốn thêm vào")
    arrSoLuong_Sp= ["ví da","thắt lưng","ví da bò"]
    let date="<table style='float: left; border:1px'>"
    for (let i = 0; i < arrSoLuong_Sp.length; i++) {
        if (i === 0) {
            date += "<tr>"
                date += "<td>" + arrThong_tin[0] + "</td>"
                date +="</tr>"
            }

        else{
            date += "<tr>"

            for (let j = 0; j < arrThong_tin.length; j++) {
                date += "<td></td>"}
    }

        date += "</tr>"

    }
        date += "</table>"



}
thongTin_sanpham()