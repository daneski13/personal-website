import {
	S as u,
	i as h,
	s as c,
	G as g,
	k as m,
	l as d,
	m as A,
	h as o,
	n as f,
	b,
	H as k,
	I as v,
	J as S,
	g as q,
	d as w
} from './index.45ab08d9.js';
function C(r) {
	let t, s;
	const i = r[4].default,
		l = g(i, r, r[3], null);
	return {
		c() {
			(t = m('a')), l && l.c(), this.h();
		},
		l(e) {
			t = d(e, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var a = A(t);
			l && l.l(a), a.forEach(o), this.h();
		},
		h() {
			f(t, 'href', r[0]), f(t, 'target', r[1]), f(t, 'rel', r[2]), f(t, 'class', 'svelte-1d6sgkw');
		},
		m(e, a) {
			b(e, t, a), l && l.m(t, null), (s = !0);
		},
		p(e, [a]) {
			l && l.p && (!s || a & 8) && k(l, i, e, e[3], s ? S(i, e[3], a, null) : v(e[3]), null),
				(!s || a & 1) && f(t, 'href', e[0]),
				(!s || a & 2) && f(t, 'target', e[1]),
				(!s || a & 4) && f(t, 'rel', e[2]);
		},
		i(e) {
			s || (q(l, e), (s = !0));
		},
		o(e) {
			w(l, e), (s = !1);
		},
		d(e) {
			e && o(t), l && l.d(e);
		}
	};
}
function E(r, t, s) {
	let { $$slots: i = {}, $$scope: l } = t,
		{ href: e } = t,
		{ target: a = '_blank' } = t,
		{ rel: _ = '' } = t;
	return (
		(r.$$set = (n) => {
			'href' in n && s(0, (e = n.href)),
				'target' in n && s(1, (a = n.target)),
				'rel' in n && s(2, (_ = n.rel)),
				'$$scope' in n && s(3, (l = n.$$scope));
		}),
		[e, a, _, l, i]
	);
}
class H extends u {
	constructor(t) {
		super(), h(this, t, E, C, c, { href: 0, target: 1, rel: 2 });
	}
}
export { H as A };