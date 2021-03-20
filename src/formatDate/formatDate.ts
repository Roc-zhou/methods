export function formatDate<T>(date: any, format = 'yyyy-MM-dd hh:mm:ss'): string {
	if (!date) return '';
	date = new Date(date);
	let y = date.getFullYear();
	let m = date.getMonth() + 1;
	let d = date.getDate();
	let h = date.getHours();
	let m1 = date.getMinutes();
	let s = date.getSeconds();
	m = m < 10 ? ("0" + m) : m;
	d = d < 10 ? ("0" + d) : d;
	h = h < 10 ? ("0" + h) : h;
	m1 = m1 < 10 ? ("0" + m1) : m1;
	s = s < 10 ? ('0' + s) : s;

	return format = format.replace('yyyy', y).replace('MM', m).replace('dd', d).replace('hh', h).replace('mm', m1).replace('ss', s)
}