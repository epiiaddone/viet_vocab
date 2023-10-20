
//6 tones
export const tones = ['none', 'high', 'low', 'break', 'dot', 'curve'];

//12 sinle vowels
export const single_vowels = ['a', 'ă', 'â', 'e', 'ê', 'i', 'o', 'ô', 'ơ', 'u', 'ư', 'y'];

//32 double vowels
export const double_vowels = ['ai', 'ao', 'au', 'âu', 'ay', 'ây', 'eo', 'êu', 'ia', 'iê/yê', 'iu', 'oa', 'oă', 'oe', 'oi', 'ôi', 'ơi', 'oo', 'ôô', 'ua', 'uă', 'uâ', 'ưa', 'uê', 'ui', 'ưi', 'uo', 'uô', 'uơ', 'ươ', 'ưu', 'uy' ];

//13 triple vowels - currently incomplete
export const triple_vowels = ['iêu', 'oai', 'oao', 'oeo', 'uao', 'uây', 'uôi', 'ươi', 'ươu', 'uya', 'uyê', 'uyu'];

export const similar_vowels = [
['uôi', 'ươi'],
['au', 'âu'],
['ay', 'ây'],
['oa', 'oă'],
['oi', 'ôi', 'ơi'],
['oo', 'ôô'],
['ua', 'uă', 'uâ', 'ưa'],
['ui', 'ưi'],
['uo', 'uô', 'uơ', 'ươ'],
['a', 'ă', 'â'],
['e', 'ê'],
['o', 'ô', 'ơ'],
['u', 'ư']
];

//////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//[viet, eng, pattern, vowel, tone]
export const words = [
['âm (u)', 'cloudy/dark', 'am', 'â', 'none'],
['ấm', 'warm', 'am', 'â', 'high'],
['ăn', 'to eat', 'an', 'ă', 'none'],
['(bảng) anh', 'british pound', 'anh', 'a', 'none'],
['ảnh', 'photo', 'anh', 'a', 'curve' ],

['ba',  'three', 'ba', 'a', 'none'],
['bà', 'grandmother', 'ba', 'a', 'low'],
['bác', 'uncle', 'bac', 'a', 'high'],
['bắc', 'north', 'bac', 'ă', 'high'],
['ban', 'time period', 'ban', 'a', 'none'],
['bàn', 'table', 'ban', 'a', 'low'],
['bạn', 'you/friend', 'ban', 'a', 'curve'],
['bảng (anh)', 'british pound', 'bang', 'a', 'curve'],
['bằng', 'the same as', 'bang', 'ă', 'low'],
['bao (nhiêu)', 'how much', 'bao', 'ao', 'none'],
['bát', 'class- bowls', 'bat', 'a', 'high'],
['bảy / (bẩy)', 'seven', 'bay', 'ay', 'curve'],
['(bảy) / bẩy', 'seven', 'bay', 'ây', 'curve'],
['bây', 'now', 'bay', 'ây', 'none'],
['béo', 'fat', 'beo', 'eo', 'high'],
['bếp', 'kitchen', 'bep', 'ê', 'high'],
['bên', 'side', 'ben', 'ê', 'none'],
['bố', 'father', 'bo', 'ô', 'high'],
['(chạy) bộ', 'run', 'bo', 'ô', 'dot'],
['bơi', 'swim', 'boi', 'ơi', 'none'],
['bốn', 'four', 'bon', 'ô', 'high'],
['bóng', 'ball', 'bong', 'o', 'high'],
['bữa', 'meal', 'bua', 'ưa', 'break'],
['bức', 'class- flat, rectangular', 'buc', 'ư', 'high']
['buổi', 'time period', 'buoi', 'uôi', 'curve'],
['bụng', 'belly', 'bung', 'u', 'dot'],
['bút', 'pen', 'but', 'u', 'high'],

['các', 'plural', 'cac', 'a', 'high'],
['chay', 'spicy', 'chay', 'ay', 'none'],
['chạy (bộ)', 'run', 'chay', 'ay', 'dot'],
['chia', 'divide', 'chia', 'ia', 'none'],
['chiều', 'afternoon', 'chieu', 'iêu', 'low'],
['chín', 'nine', 'chin', 'i', 'high'],
['chua', 'sour', 'chua', 'ua', 'none'],
['cộng', 'add', 'cong', 'ô', 'dot'],


['đắng', 'bitter', 'dang', 'ă', 'high'],
['đêm', 'night', 'dem', 'ê', 'none'],
['đông', 'winter', 'dong', 'ô', 'none'],
['đường', 'sugar', 'duong', 'ươ', 'low'],

['gấp', 'times as much', 'gap', 'â', 'high'],
['gỗ', 'wood', 'go', 'ô', 'break'],

['hai', 'two', 'hai', 'ai', 'none'],
['hè', 'summer', 'he', 'e', 'low'],
['học', 'study', 'hoc', 'o', 'dot'],
['hôm', 'day', 'hom', 'ô', 'none'],

['không', 'zero', 'khong', 'ô', 'none'],

['lịch', 'calendar', 'lich', 'i', 'dot'],

['mai', 'future', 'mai', 'ai', 'none'],
['mấy', 'how many?', 'may', 'â', 'high'],
['một', 'one', 'mot', 'ô', 'dot'],
['Mùa', 'season', 'mua', 'ua', 'low'],
['muối', 'salt', 'muoi', 'uôi', 'high'],
['mười', 'ten', 'muoi', 'ươi', 'low'],

['năm', 'five/year', 'nam', 'ă', 'none'],
['nay', 'this', 'nay', 'ay', 'none'],
['này', 'this', 'nay', 'ay', 'low'],
['ngày', 'day', 'ngay', 'ay', 'low'],
['(nghìn) / ngàn', '1000', 'ngan', 'a', 'low'],
['nghìn / (ngàn)', '1000', 'nhgin', 'i', 'low'],
['ngọt', 'sweet', 'ngot', 'o', 'dot'],
['Nguyễn', 'common last name', 'nguyen', 'uyê', 'break'],
['nhà', 'house', 'nha', 'a', 'low'],
['nhân', 'multiply', 'nhan', 'â', 'none'],
['(bao) nhiêu', 'how much', 'nhieu', 'iêu', 'none'],
['như', 'as', 'nhu', 'ư', 'none'],
['những', 'plural', 'nhung', 'ư', 'break'],
['Nửa', 'half', 'nua', 'ưa', 'curve'],

['ở', 'at', 'o', 'ơ', 'curve'],

['phần', 'fraction', 'phan', 'â', 'low'],
['phố', 'street', 'pho', 'ô', 'high'],

['qua', 'before', 'qua', 'ua', 'none'],
['quận', 'district', 'quan', 'uâ', 'dot'],
['quen', 'know', 'quen', 'ue', 'none'],

['rưởi', 'half', 'ruoi', 'ươ', 'curve'],
['rưỡi', 'and a half', 'ruoi', 'ươ', 'break'],

['sách', 'book', 'sach', 'a', 'high'],
['sáng', 'morning', 'sang', 'a', 'high'],
['sắt', 'iron', 'sat', 'ă', 'high'],
['sau', 'next', 'sau', 'au', 'none'],
['sáu', 'six', 'sau', 'au', 'high'],

['tám', 'eight', 'tam', 'a', 'high'],
['Tháng', 'month', 'thang', 'a', 'high'],
['thu', 'autumn', 'thu', 'u', 'none'],
['thư', 'letter', 'thu', 'ư', 'none'],
['thứ', 'ordinal marker', 'thu', 'ư', 'high'],
['tỉ', 'billion', 'ti', 'i', 'curve'],
['tối', 'evening', 'toi', 'ôi', 'high'],
['tới', 'next', 'toi', 'ơi', 'high'],
['trăm', 'hundred', 'tram', 'ă', 'none'],
['tre', 'bamboo', 'tre', 'e', 'none'],
['triệu', 'million', 'trieu', 'iêu', 'dot'],
['trư', 'subtract', 'tru', 'ư', 'low']
['trưa', 'noon', 'trua', 'ưa', 'none'],
['trước', 'last', 'truoc', 'ươ', 'high'],
['Tuần', 'week', 'tuan', 'uâ', 'low'],

['(âm) u', 'cloudy/dark', 'u', 'u', 'none'],

['vạn','10,000', 'van', 'a', 'dot'],
['vị', 'flavor', 'vi', 'i', 'dot'],


['xuân', 'spring', 'xuan', 'uâ', 'none'],
];