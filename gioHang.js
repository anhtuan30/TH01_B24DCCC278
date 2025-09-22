import react, {useState}from "react";
function GioHang(){
    const SanPham =[
        {ten: 'Sach', gia:10000},
        {ten: 'But', gia:5000},
        {ten: 'Vo', gia:7000},
    ];

    const [giohang, setGioHang] = useState([]);

    const addToGioHang=(SanPham) =>{
        setGioHang([...giohang, SanPham]);
    }

    const getTotal = () =>{
        return giohang.reduce((sum, item) => sum +item.gia, 0);
    };
    return(
        <div>
            <h2>Bai 3: Gio hang</h2>
            <h3>San pham</h3>
            <ul>
                {SanPham.map((p) => (
                    <li key ={p.id}>
                        {p.ten} - {p.gia}d
                        <button onClick = {()=>addToGioHang((p))}>Them vao gio</button>
                    </li>
                ))}
            </ul>
            <h3>Gio hang</h3>
            <ul>
                {giohang.map((c, index) =>(
                    <li key ={index}>
                        {c.ten} - {c.gia}d
                    </li>
                ))}
            </ul>
            <h4>Tong tien: {getTotal()}</h4>
        </div>
    );
} 
export default GioHang;