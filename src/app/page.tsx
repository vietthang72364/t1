export default function Page() {
  return (
    <main className="p-10 bg-gray-100 text-gray-800 min-h-screen font-sans">
      <h1 className="text-center text-3xl font-bold text-[#2c3e50] mb-8">
        BÁO CÁO THỐNG KÊ QUẢN LÝ ĐẶT PHÒNG
      </h1>

      {/* Thống kê từng khách sạn */}
      <div className="flex flex-wrap gap-5 mb-10">
        <div className="bg-white rounded-xl p-5 flex-1 min-w-[280px] shadow-md">
          <h2 className="text-xl font-bold text-[#007BFF]">Khách sạn Ánh Dương</h2>
          <div className="text-sm text-gray-600 my-2">
            Địa chỉ: 123 Đường Biển, Đà Nẵng<br />
            Hotline: 0909 123 456
          </div>
          <div className="font-semibold">Tổng phòng: 100</div>
          <div className="font-semibold">Đã đặt: 72</div>
          <div className="font-semibold">Phòng trống: 28</div>
          <div className="font-semibold">Doanh thu: 180.000.000₫</div>
        </div>

        <div className="bg-white rounded-xl p-5 flex-1 min-w-[280px] shadow-md">
          <h2 className="text-xl font-bold text-[#007BFF]">Khách sạn Sông Hàn</h2>
          <div className="text-sm text-gray-600 my-2">
            Địa chỉ: 456 Trần Phú, Đà Nẵng<br />
            Hotline: 0911 888 999
          </div>
          <div className="font-semibold">Tổng phòng: 80</div>
          <div className="font-semibold">Đã đặt: 60</div>
          <div className="font-semibold">Phòng trống: 20</div>
          <div className="font-semibold">Doanh thu: 130.000.000₫</div>
        </div>
      </div>

      {/* Bộ lọc */}
      <div className="bg-white p-5 rounded-lg mb-8 shadow-md">
        <h3 className="text-lg font-semibold text-[#007BFF] mb-4">🔍 Tìm kiếm / Lọc đơn đặt phòng</h3>
        <form className="flex flex-wrap gap-4 items-center">
          <label className="flex items-center gap-2">
            Khách sạn:
            <select className="border border-gray-300 rounded px-2 py-1">
              <option value="">-- Tất cả --</option>
              <option>Ánh Dương</option>
              <option>Sông Hàn</option>
            </select>
          </label>

          <label className="flex items-center gap-2">
            Ngày nhận:
            <input type="date" className="border border-gray-300 rounded px-2 py-1" />
          </label>

          <label className="flex items-center gap-2">
            Giá từ:
            <input type="number" className="border border-gray-300 rounded px-2 py-1" placeholder="1.000.000₫" />
          </label>

          <label className="flex items-center gap-2">
            Đến:
            <input type="number" className="border border-gray-300 rounded px-2 py-1" placeholder="5.000.000₫" />
          </label>

          <button
            type="submit"
            className="bg-[#007BFF] text-white px-4 py-2 rounded hover:bg-[#0056b3]"
          >
            Lọc
          </button>
        </form>
      </div>

      {/* Bảng chi tiết đơn đặt phòng */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden border-collapse">
          <thead>
            <tr className="bg-[#007BFF] text-white">
              <th className="py-3 px-2">STT</th>
              <th className="py-3 px-2">Khách sạn</th>
              <th className="py-3 px-2">Khách hàng</th>
              <th className="py-3 px-2">Điện thoại</th>
              <th className="py-3 px-2">Loại phòng</th>
              <th className="py-3 px-2">Ngày nhận</th>
              <th className="py-3 px-2">Ngày trả</th>
              <th className="py-3 px-2">Giá</th>
              <th className="py-3 px-2">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center even:bg-gray-100">
              <td className="py-2">1</td>
              <td>Ánh Dương</td>
              <td>Nguyễn Văn A</td>
              <td>0905123456</td>
              <td>Deluxe</td>
              <td>2025-06-29</td>
              <td>2025-07-02</td>
              <td>3.600.000₫</td>
              <td className="text-green-600 font-bold">Hoàn tất</td>
            </tr>
            <tr className="text-center even:bg-gray-100">
              <td className="py-2">2</td>
              <td>Sông Hàn</td>
              <td>Trần Thị B</td>
              <td>0988111222</td>
              <td>Superior</td>
              <td>2025-06-30</td>
              <td>2025-07-03</td>
              <td>2.400.000₫</td>
              <td className="text-orange-500 font-bold">Đã đặt</td>
            </tr>
            <tr className="text-center even:bg-gray-100">
              <td className="py-2">3</td>
              <td>Ánh Dương</td>
              <td>Lê Quang C</td>
              <td>0911000999</td>
              <td>Standard</td>
              <td>2025-07-01</td>
              <td>2025-07-05</td>
              <td>4.000.000₫</td>
              <td className="text-red-600 font-bold">Đã hủy</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
