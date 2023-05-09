console.log("Bài tập JS buổi 5")

// BT1
/** Input: 
* Thông tin điểm thi 3 môn người dùng nhập
* Thông tin đối tượng và khu vực được cộng điểm theo quy định mà người dùng nhập vào:
+ Khu vực A công 2đ, khu vực B cộng 1 điểm và khu vực C cộng 0.5 điểm
+ Đối tượng 1 cộng 2.5 điểm, đối tượng 2 công 1.5 điểm và đối tượng 3 cộng 1 điểm
 * Điểm chuẩn của hội động
 * Các bước xử lý:
 + Tính tổng điểm 3 môn = môn 1 + môn 2 + môn 3
 + Tính tổng điểm cuối cùng: tổng điểm 3 môn + đối tượng + khu vực
 Xét cách trường hợp:
+ Nếu điểm chuẩn bị để trống thì trả về thông báo: vui lòng nhập điểm chuẩn
+ Nếu điểm chuẩn < 0 hoặc điểm 1 trong 3 môn < 0 thì trả về thông báo: Vui lòng nhập số điểm hợp lệ (số điểm không được < 0)
+ Nếu điểm 1 trong 3 môn = 0 thì xuất kết quả: bạn đã rớt vì bị điểm liệt không cần xuất  tổng điểm. Ngươc lại, nếu tổng điểm cuối < điểm chuẩn thì xuất kết quả: bạn không đủ điểm chuẩn và xuất ra tổng điểm 3 môn. Còn lại thì xuất kết quả: chúc mừng bạn đã đậu và xuất tổng điểm 3 môn
 * Output: Kết quả đậu hay rớt và tổng điểm của thí sinh
 */

document.getElementById("tinhKetQua").onclick = function tinhKetQua() {
    // lấy thông tin từ người dùng
    var diemChuan = document.getElementById("diemChuan").value * 1;

    var diemMon1 = document.getElementById("diem1").value * 1;
    var diemMon2 = document.getElementById("diem2").value * 1;
    var diemMon3 = document.getElementById("diem3").value * 1;

    var doiTuong = document.getElementById("doiTuong").value * 1
    var khuvuc = document.getElementById("khuVuc").value * 1

    var tongDiem3Mon = diemMon1 + diemMon2 + diemMon3;
    var tongDiemCuoi = tongDiem3Mon + doiTuong + khuvuc;

    // Xử lý dữ liệu
    // TH1
    if (diemChuan == "") {
        alert("Vui lòng nhập điểm chuẩn");

        // TH2
    } else if (diemChuan < 0 || diemMon1 < 0 || diemMon2 < 0 || diemMon3 < 0) {
        alert("Vui lòng nhập số điểm hợp lệ (số điểm không được < 0)");
    } else {
        if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
            var hienThiKetQua = "Bạn đã rớt vì bị điểm liệt";

        } else if (tongDiemCuoi < diemChuan) {
            var hienThiKetQua = "Bạn không đủ điểm chuẩn.";
            document.getElementById("hienThiKetQua").innerHTML = hienThiKetQua + " Tổng điểm 3 môn của bạn là: " + tongDiemCuoi + "điểm";
            document.getElementById("hienThiKetQua").style.color = "red";

        } else {
            var hienThiKetQua = "Chúc mừng bạn đã đậu"
            document.getElementById("hienThiKetQua").innerHTML = hienThiKetQua + " Tổng điểm 3 môn của bạn là: " + tongDiemCuoi + "điểm";
            document.getElementById("hienThiKetQua").style.color = "blue";
        }
    }
}

// BT2
/** Input: lấy thông tin tên và số Kw tiêu thị từ người dùng nhập vào
 * Các bước xử lý:
 Xét các trường hợp:
 + Nếu số Kw < 0 xuát ra thông báo: Vui lòng nhập số Kw tiêu thụ > 0
 + Nếu số kw <= 50 thì tiền điện được tính = số Kw tiêu thụ * 500
 + Nếu số > 50 thì
 * Output: Xuất ra kết quả số tiền mà người dùng phải trả
 * 
 */

document.getElementById("tinhTienDien").onclick = function tinhKetQua() {
    var tenNguoiDung = document.getElementById("hoTen").value;
    var soKwTieuThu = document.getElementById("soKw").value * 1;
    var tienDien = 0;

    if (soKwTieuThu < 0) {
        alert("Vui lòng nhập số Kw tiêu thụ > 0");
    } else {
        if (soKwTieuThu > 50) {
            tienDien = 50 * 500;
            soKwTieuThu -= 50;
            if (soKwTieuThu > 50) {
                tienDien += 50 * 650;
                soKwTieuThu -= 50;
                if (soKwTieuThu > 100) {
                    tienDien += 100 * 850;
                    soKwTieuThu -= 100;
                    if (soKwTieuThu > 150) {
                        tienDien += 150 * 1100;
                    soKwTieuThu -= 150;
                    if (soKwTieuThu > 0) {
                        tienDien += soKwTieuThu * 1300;
                    }
                    } else {
                        tienDien += soKwTieuThu * 1100;
                    }
                } else {
                    tienDien += soKwTieuThu * 850;
                }
            } else {
                tienDien += soKwTieuThu * 650;
            }
        } else {
            // nhỏ hơn 50Kw
            tienDien = soKwTieuThu * 500;
        }
    }
    document.getElementById("giaTienDien").innerHTML = "Số tiền điện " + tenNguoiDung + " phải trả là: " + tienDien.toLocaleString() + "đ";
}


    // BT3
    /** Input: lấy thông tin họ tên, tổng thu nhập năm và số người phụ thuộc được nhập vào
     * Các bước xử lý:
     Xét các trường hợp:
     + Nếu người dùng để trống 1 trong số các trường thông tin thì xuất ra thông báo yêu cầu người dùng: Vui lòng nhập đầy đủ thông tin
     + Nếu tổng thu nhập < số người phụ thuộc * hệ số phụ thuộc thì xuất thông báo: Thu nhập của bạn quá thấp, không cần phải đóng  thuế đâu
     + Thu nhập chịu thuế = tổng thu nhập - 4tr - số người phụ thuộc * hệ số phụ thuộc
     + Nếu thu nhập <= 60tr thì % thuế = 5 /100
     + Nếu thu nhập > 60tr và bé hơn 120tr thì % thuế = 10 /100
     + Nếu thu nhập > 120tr và bé hơn 210tr thì % thuế = 15 /100
     + Nếu thu nhập > 210tr và bé hơn 384tr thì % thuế = 20 /100
     + Nếu thu nhập > 384tr và bé hơn 624tr thì % thuế = 25 /100
     + Nếu thu nhập > 624tr và bé hơn 960tr thì % thuế = 30 /100
     + Nếu thu nhập > 960tr thì % thuế = 30 /100
     + Tiền thuế phải nộp = thu nhập chịu thuế + % thuế
     * Output: tính và xuất thuế thu nhập cá nhân phải trả
     */

    function tinhThueThuNhapCaNhan() {
        // lấy thông tin từ người dùng
        var nhapHoTen = document.getElementById("nhapHoTen").value;
        console.log(nhapHoTen)
        var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
        var soNguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
        var phanTramThue = 0;
        const heSoPhuThuoc = 1600000;


        if (nhapHoTen == "" || tongThuNhap == "") {
            alert("Vui lòng nhập đầy đủ thông tin")
        } if (tongThuNhap < soNguoiPhuThuoc * heSoPhuThuoc) {
            alert("Thu nhập của bạn quá thấp, không cần phải đóng  thuế đâu");
        } else {
            var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * heSoPhuThuoc;
            if (thuNhapChiuThue <= 60000000) {
                phanTramThue = 5 / 100;
            } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
                phanTramThue = 10 / 100;
            } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
                phanTramThue = 15 / 100;
            } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
                phanTramThue = 20 / 100;
            } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
                phanTramThue = 25 / 100;
            } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
                phanTramThue = 30 / 100;
            } else {
                phanTramThue = 35 / 100;
            }
            var tienThuePhaiNop = thuNhapChiuThue * phanTramThue;
            document.getElementById("soTienThue").innerHTML = "Tiền thuế thu nhập cá nhân ông/bà: " + nhapHoTen + " phải nộp là: " + tienThuePhaiNop.toLocaleString() + "đ";
        }
    }

    // BT4 
    /** Input: lấy thông tin loại KH, mã KH và số kênh cao cấp mà người dùng nhập
     * Các bước xử lý:
     * 
     * Output: tính và xuất ra số  tiền cáp mà người dùng phải trả
     */

    document.getElementById("loaiKH").onchange = function () {
        var loaiKH = document.getElementById("loaiKH").value;
        if (loaiKH == "nhaDan") {
            document.getElementById("soKetNoi").disabled = true;
        } else {
            document.getElementById("soKetNoi").disabled = false;
        }
    };

    function tinhTienCap() {
        var maKH = document.getElementById("maKH").value;
        var loaiKH = document.getElementById("loaiKH").value;

        if (loaiKH == "nhaDan") {
            var phiHoaDon = 4.5;
            var phiDvCoBan = 20.5;
            var phiKenh = 7.5;
            var soKenh = document.getElementById("soKenh").value * 1;

            if (soKenh < 0) {
                alert("Vui lòng nhập số kênh > 0");
            } else {
                var tienCap = phiHoaDon + phiDvCoBan + soKenh * phiKenh;
                document.getElementById("tinhTienCap").innerHTML = "Số tiền cáp của hộ dân " + maKH + " là: " + "$" + tienCap.toLocaleString();
            }
        } else {
            var phiHoaDon = 15;
            var phiDvCoBan = 75;
            var phiKetNoiThem = 5;
            var phiKenh = 50;
            var soKetNoi = document.getElementById("soKetNoi").value * 1;
            var soKenh = document.getElementById("soKenh").value * 1;

            if (soKetNoi < 0 || soKenh < 0) {
                alert("Vui lòng nhập số > 0")
            } else {
                if (soKetNoi < 10) {
                    var tienCap = phiHoaDon + phiDvCoBan + soKenh * phiKenh;
                } else {
                    var tienCap = phiHoaDon + phiDvCoBan + soKenh * phiKenh + (soKetNoi - 10) * phiKetNoiThem;
                }
                document.getElementById("tinhTienCap").innerHTML = "Số tiền cáp của doanh nghiệp " + maKH + " là: " + "$" + tienCap.toLocaleString();
            }
        }
    }
