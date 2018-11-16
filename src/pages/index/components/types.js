const Types = [
		{
			name: 'text', cname:'文本',
			children: [
				{ name: 'cparagraph', cname: '中文段落'},
				{ name: 'csentence', cname: '中文句子' },
				{ name: 'cword', cname: '中文汉字' },
				{ name: 'ctitle', cname: '中文标题'},
				{ name: 'paragraph', cname: '英文段落'},
				{ name: 'sentence', cname: '英文句子' },
				{ name: 'word', cname: '英文单词' },
				{ name: 'title', cname: '英文标题'}
			],
			min: true,
			max: true
		},
		{ name: 'number', cname: '数值',
			children: [
				{ name: 'integer', cname: '整型' },
				{ name: 'float', cname: '浮点数' },
				{ name: 'natural', cname: '自然数' }
			],
			min: true,
			max: true
		},
		{ name: 'object', cname: 'Map' },
		{ name: 'array', cname: 'List' },
		{ name: 'date', cname:'日期',
			children: [
				{ name: 'date', cname: '日期' },
				{ name: 'time', cname: '时间' },
				{ name: 'datetime', cname: '日期时间'}
			]
		},
		{ name: 'web', cname: '网络',
			children: [
				{ name: 'url', cname: 'URL' },
				{ name: 'protocol', cname: '协议' },
				{ name: 'domain', cname: '域名' },
				{ name: 'tld', cname: '顶级域名' },
				{ name: 'email', cname: '邮件地址' },
				{ name: 'ip', cname: 'IP' }
			]
		},
		{ name: 'image', cname:'图片',
			children: [
				{ name: 'image', cname: '图片地址' },
				{ name: 'dataImage', cname: 'base64图片' }
			]
		},
		{ name: 'boolean', cname:'布尔值'},
		{ name: 'color', cname:'颜色',
			children: [
				{ name: 'hex', cname: 'hex' },
				{ name: 'rgb', cname: 'rgb' },
				{ name: 'rgba', cname: 'rgba' },
				{ name: 'hsl', cname: 'hsl' }
			]
		},
		{ name: 'id', cname:'唯一ID',
			children: [
				{ name: 'guid', cname: 'GUID' },
				{ name: 'id', cname: '18位身份证' }
			]
		},
		{ name: 'name', cname: '名字',
			children: [
				{ name: 'first', cname: '英文名' },
				{ name: 'last', cname: '英文姓' },
				{ name: 'name', cname: '英文姓名' },
				{ name: 'cfirst', cname: '中文名' },
				{ name: 'clast', cname: '中文姓' },
				{ name: 'cname', cname: '中文姓名' }
			]
		},
		{ name: 'address', cname:'中国地区',
			children: [
				{ name: 'region', cname: '大区' },
				{ name: 'province', cname: '省' },
				{ name: 'city', cname: '市' },
				{ name: 'county', cname: '县' },
				{ name: 'zip', cname: '邮政编码' }
			]
		}
	]

export default Types;
