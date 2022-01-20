export const lang = 'gl'
export const langName = 'galego'
export const langNameIntl = {
	en: 'galician',
	es: 'gallego',
	fr: 'galicien',
	it: 'galiziano',
	de: 'galizisch',
}

export const ordinalArabic = n => `${n}º`

export const weekStart = 1

export const weekDay = {
	large: ['domingo', 'luns', 'martes', 'mércores', 'xoves', 'venres', 'sábado'],
	short: ['dom', 'lun', 'mar', 'mér', 'xov', 'ven', 'sáb'],
	min: ['do', 'lu', 'ma', 'mé', 'xo', 've', 'sá'],
}

export const weekDayAlt = {
	large: ['domingo', 'segunda feira', 'terceira feira', 'cuarta feira', 'quinta feira', 'sexta feira', 'sábado'],
	short: ['dom', 'seg', 'ter', 'cua', 'qui', 'sex', 'sáb'],
	min: ['do', '2ª', '3ª', '4ª', '5ª', '6ª', 'sá'],
}

export const month = {
	large: ['xaneiro', 'febreiro', 'marzo', 'abril', 'maio', 'xuño', 'xullo', 'agosto', 'setembro', 'outubro', 'novembro', 'decembro'],
	short: ['xan', 'feb', 'mar', 'abr', 'maio', 'xuño', 'xul', 'ago', 'set', 'out', 'nov', 'dec']
}

export const period = {
	second: ['segundo', 'segundos'],
	minute: ['minuto', 'minutos'],
	hour: ['hora', 'horas'],
	day: ['día', 'días', 'diario'],
	week: ['semana', 'semanas', 'semanal'],
	fortnight: ['quincena', 'quincenas', 'quincenal'],
	month: ['mes', 'meses', 'mensual'],
	bimester: ['bimestre', 'bimestres', 'bimestral'],
	trimester: ['trimestre', 'trimestres', 'trimestral'],
	quarter: ['cuadrimestre', 'cuadrimestres', 'cuadrimestral'],
	semester: ['semestre', 'semestres', 'semestral'],
	year: ['ano', 'anos', 'anual'],
	biennium: ['bienio', 'bienios', 'bienal'],
	triennium: ['trienio', 'trienios', 'trienal'],
	lustrum: ['lustro', 'lustros', 'quinquenal'],
}

export const ordinal = [
	[['primeiro', 'primeiros'], ['primeira', 'primeiras']],
	[['segundo', 'segundos'], ['segunda', 'segundas']],
	[['terceiro', 'terceiros'], ['terceira', 'terceiras']],
	[['cuarto', 'cuartos'], ['cuarta', 'cuartas']],
	[['quinto', 'quintos'], ['quinta', 'quintas']],
	[['sexto', 'sextos'], ['sexta', 'sextas']],
	[['sétimo', 'sétimos'], ['sétima', 'sétimas']],
	[['oitavo', 'oitavos'], ['oitava', 'oitavas']],
	[['nono', 'nonos'], ['nona', 'nonas']],
	[['décimo', 'décimos'], ['décima', 'décimas']],
	[['undécimo', 'undécimos'], ['undécima', 'undécimas']],
	[['duodécimo', 'duodécimos'], ['duodécima', 'duodécimas']],
]

export const format = {
	LT: 'H:mm',
	LTS: 'H:mm:ss',
	L: 'DD/MM/YYYY',
	LL: 'D [de] MMMM [de] YYYY',
	LLL: 'D [de] MMMM [de] YYYY H:mm',
	LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
}

export const relativeTime = {
	now: 'agora',
	today: 'hoxe',
	tomorrow: 'mañá',
	yesterday: 'onte',
	soon: 'pronto',
	later: 'máis tarde',
	future: 'en %s',
	past: 'fai %s',
}
