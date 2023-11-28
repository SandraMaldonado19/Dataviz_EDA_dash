Search.setIndex({"docnames": ["EDA_Dash", "intro"], "filenames": ["EDA_Dash.ipynb", "intro.md"], "titles": ["Dash Anomal\u00edas de temperatura", "An\u00e1lisis de Anomla\u00edas de Temperatura en la Superficie Global"], "terms": {"apliclaci\u00f3n": 0, "desplegada": 0, "tien": 0, "como": 0, "objetivo": 0, "lo": [0, 1], "cambio": 0, "cercana": 0, "superfici": 0, "en": 0, "todo": 0, "el": 0, "mundo": 0, "entr": 0, "1850": 0, "2018": 0, "archivo": 0, "presenta": 0, "relaci\u00f3n": 0, "con": [0, 1], "per\u00edodo": 0, "1961": 0, "1990": 0, "gener": 0, "est": [0, 1], "conjunto": 0, "muestra": 0, "un": 0, "aumento": 0, "del": [0, 1], "calentamiento": 0, "global": 0, "desd": 0, "mediado": 0, "siglo": 0, "19": 0, "\u00faltimo": 0, "a\u00f1o": 0, "consonancia": 0, "otro": 0, "fen\u00f3meno": 0, "se": [0, 1], "debe": 0, "m\u00faltipl": 0, "factor": 0, "incluido": 0, "una": 0, "mejor": 0, "representaci\u00f3n": 0, "\u00e1rtico": 0, "comprensi\u00f3n": 0, "sesgo": 0, "evoluci\u00f3n": 0, "medicion": 0, "sobr": 0, "mar": 0, "tierra": 0, "para": 0, "revisar": 0, "detal": 0, "proceso": 0, "obtenci\u00f3n": 0, "procesamiento": 0, "visit": 0, "informaci\u00f3n": 0, "referencia": 0, "al": 0, "final": [0, 1], "documento": [0, 1], "importanci\u00f3n": 0, "librer\u00eda": 0, "import": 0, "panda": 0, "pd": 0, "from": 0, "time": 0, "mktime": 0, "datetim": 0, "timedelta": 0, "seaborn": 0, "sn": 0, "matplotlib": 0, "pyplot": 0, "plt": 0, "pickl": 0, "warn": 0, "filterwarn": 0, "ignor": 0, "previo": 0, "construcci\u00f3n": 0, "aplicaci\u00f3n": 0, "es": 0, "necesario": 0, "procesar": 0, "caso": 0, "utilizamo": 0, "leer": 0, "configurar": 0, "estructura": 0, "que": 0, "est\u00e9": 0, "acord": 0, "formato": 0, "tiempo": 0, "temperature_url": 0, "http": 0, "raw": 0, "githubusercont": 0, "com": 0, "sandramaldonado19": 0, "dash_pf_dataviz": 0, "main": 0, "originaldata_temp": 0, "csv": 0, "df_temperatur": 0, "read_csv": 0, "head": 0, "year": 0, "januari": 0, "februari": 0, "march": 0, "april": 0, "mai": 0, "june": 0, "juli": 0, "august": 0, "septemb": 0, "octob": 0, "novemb": 0, "decemb": 0, "yearmean": 0, "unnam": 0, "14": 0, "0": 0, "675": 0, "333": 0, "591": 0, "589": 0, "508": 0, "344": 0, "160": 0, "208": 0, "385": 0, "533": 0, "283": 0, "404": 0, "418": 0, "nan": 0, "1": 0, "53": 0, "000": 0, "47": 0, "44": 0, "48": 0, "49": 0, "52": 0, "55": 0, "57": 0, "58": 0, "2": 0, "1851": 0, "201": 0, "469": 0, "646": 0, "542": 0, "198": 0, "137": 0, "097": 0, "102": 0, "091": 0, "008": 0, "082": 0, "228": 0, "233": 0, "3": 0, "56": 0, "54": 0, "59": 0, "51": 0, "4": 0, "1852": 0, "375": 0, "477": 0, "560": 0, "585": 0, "127": 0, "084": 0, "005": 0, "136": 0, "002": 0, "172": 0, "305": 0, "065": 0, "229": 0, "eliminar": 0, "columna": 0, "vac\u00eda": 0, "drop": 0, "column": 0, "str": 0, "contain": 0, "axi": 0, "fila": 0, "intermedia": 0, "index": 0, "reset_index": 0, "true": 0, "1853": 0, "280": 0, "386": 0, "268": 0, "142": 0, "083": 0, "057": 0, "250": 0, "392": 0, "411": 0, "337": 0, "270": 0, "1854": 0, "381": 0, "361": 0, "243": 0, "334": 0, "291": 0, "299": 0, "179": 0, "239": 0, "217": 0, "095": 0, "410": 0, "450": 0, "292": 0, "aqu\u00ed": 0, "colocamo": 0, "encuentra": 0, "variabl": 0, "independient": 0, "sola": 0, "su": 0, "respectivo": 0, "valor": 0, "usando": 0, "funci\u00f3n": 0, "melt": 0, "convertir": 0, "df_timeseri": 0, "id_var": 0, "dond": 0, "sea": 0, "igual": 0, "cambiar": 0, "nombr": 0, "month": 0, "renam": 0, "valu": 0, "crear": 0, "nueva": 0, "fecha": 0, "m": 0, "date": 0, "to_datetim": 0, "astyp": 0, "format": 0, "b": 0, "formatear": 0, "solo": 0, "muestr": 0, "me": 0, "dt": 0, "strftime": 0, "01": 0, "2083": 0, "2019": 0, "037": 0, "2084": 0, "2020": 0, "693": 0, "2085": 0, "2021": 0, "751": 0, "2086": 0, "2022": 0, "768": 0, "2087": 0, "2023": 0, "9": 0, "999": 0, "2088": 0, "row": 0, "sort_valu": 0, "\u00faltima": 0, "tre": 0, "iloc": 0, "174": 0, "02": 0, "348": 0, "03": 0, "522": 0, "04": 0, "696": 0, "05": 0, "869": 0, "871": 0, "1043": 0, "052": 0, "06": 0, "1217": 0, "150": 0, "07": 0, "1391": 0, "199": 0, "08": 0, "1565": 0, "347": 0, "09": 0, "to_csv": 0, "fals": 0, "incluy": 0, "gr\u00e1fico": 0, "diversa": 0, "escala": 0, "temporal": 0, "l\u00ednea": 0, "caja": 0, "bigot": 0, "proporcionando": 0, "patron": 0, "tendencia": 0, "c": 0, "forma": 0, "interactiva": 0, "asimismo": 0, "explora": 0, "modelo": 0, "predictivo": 0, "timeseries_url": 0, "df_tseri": 0, "c\u00f3digo": 0, "inicia": 0, "importando": 0, "biblioteca": 0, "necesaria": 0, "cargando": 0, "repositorio": 0, "github": 0, "luego": 0, "defin": 0, "calcular": 0, "intervalo": 0, "confianza": 0, "crea": 0, "dise\u00f1a": 0, "t\u00edtulo": 0, "callback": 0, "actualizar": 0, "cuando": 0, "usuario": 0, "coloca": 0, "cursor": 0, "\u00e9l": 0, "hover": 0, "mostrando": 0, "seleccionado": 0, "finalment": 0, "ejecuta": 0, "plotli": 0, "graph_object": 0, "go": 0, "definimo": 0, "encargada": 0, "96": 0, "z": 0, "95": 0, "def": 0, "calculate_rolling_mean": 0, "df": 0, "window_s": 0, "num_of_std": 0, "rolling_mean": 0, "roll": 0, "window": 0, "mean": 0, "rolling_std": 0, "std": 0, "upper_band": 0, "lower_band": 0, "return": 0, "copi": 0, "figura": 0, "fig": 0, "figur": 0, "agregar": 0, "tempor": 0, "origin": 0, "add_trac": 0, "scatter": 0, "x": 0, "mode": 0, "line": 0, "name": 0, "dict": 0, "color": 0, "blue": 0, "red": 0, "banda": 0, "superior": 0, "green": 0, "inferior": 0, "layout": 0, "update_layout": 0, "titl": 0, "xaxis_titl": 0, "yaxis_titl": 0, "mostrar": 0, "show": 0, "pued": 0, "observar": 0, "etapa": 0, "pre": 0, "industri": 0, "sugier": 0, "comportamiento": 0, "estacionario": 0, "grafic\u00f3": 0, "por": [0, 1], "utiliza": 0, "visualizar": 0, "largo": 0, "cada": 0, "representa": 0, "espec\u00edfico": 0, "variabilidad": 0, "vario": 0, "est\u00e1": 0, "dise\u00f1ado": 0, "tal": 0, "manera": 0, "o": 0, "mediana": 0, "medio": 0, "cuartil": 0, "e": 0, "bord": 0, "at\u00edpico": 0, "punto": 0, "encima": 0, "debajo": 0, "extienden": 0, "esto": 0, "proporciona": 0, "visi\u00f3n": 0, "clara": 0, "permitiendo": 0, "identificar": 0, "convert": 0, "categor": 0, "type": 0, "correct": 0, "order": 0, "ordered_month": 0, "categori": 0, "creat": 0, "each": 0, "box": 0, "data": 0, "width": 0, "5": 0, "groupbi": 0, "add": 0, "trend": 0, "multi": 0, "averag": 0, "trend_lin": 0, "black": 0, "adjust": 0, "xaxi": 0, "yaxi": 0, "boxmod": 0, "group": 0, "To": 0, "displai": 0, "indica": 0, "meno": 0, "50": 0, "mantien": 0, "preindustrial": 0, "magnitud": 0, "var\u00edan": 0, "22": 0, "siendo": 0, "octubr": 0, "m\u00e1": 0, "similar": 0, "conoc": 0, "25": 0, "ordenado": 0, "month_ord": 0, "heatmap_data": 0, "pivot": 0, "reindex": 0, "heatmap": 0, "colorscal": 0, "rdbu": 0, "colorbar": 0, "reversescal": 0, "categoryord": 0, "arrai": 0, "categoryarrai": 0, "A": 0, "partir": 0, "han": 0, "identificado": 0, "significativa": 0, "tra": 0, "revoluci\u00f3n": 0, "tuvo": 0, "lugar": 0, "xix": 0, "ha": 0, "registrado": 0, "incremento": 0, "progresivo": 0, "hasta": 0, "cierr": 0, "xx": 0, "inicio": 0, "nuevo": 0, "milenio": 0, "observado": 0, "aceleraci\u00f3n": 0, "notabl": 0, "coinciden": 0, "gran": 0, "proliferaci\u00f3n": 0, "industrializaci\u00f3n": 0, "aug": 0, "desarrollo": 0, "\u00e1rea": 0, "urbana": 0, "son": 0, "principal": 0, "contribuyent": 0, "emisi\u00f3n": 0, "gase": 0, "efecto": 0, "invernadero": 0, "gei": 0, "causant": 0, "primordial": 0, "debido": 0, "producci\u00f3n": 0, "intensiva": 0, "continuaci\u00f3n": 0, "barra": 0, "devoluci\u00f3n": 0, "llamada": 0, "activa": 0, "interact\u00faa": 0, "esta": 0, "calcula": 0, "decenal": 0, "actualiza": 0, "express": 0, "px": 0, "dash_core_compon": [], "dcc": [], "dash_html_compon": [], "html": [], "depend": [], "input": [], "output": [], "decade_mean": 0, "decad": 0, "agg": 0, "first": 0, "bar": 0, "label": 0, "color_discrete_map": 0, "modificar": 0, "etiqueta": 0, "tick": 0, "ej": 0, "tickmod": 0, "tickval": 0, "ticktext": 0, "f": 0, "s": 0, "showlegend": 0, "keyerror": [], "traceback": [], "most": [], "recent": [], "call": [], "last": [], "cell": [], "In": [], "7": [], "10": 0, "11": [], "13": 0, "file": [], "user": [], "sandra": 1, "anaconda3": [], "env": [], "dataviz_venv": [], "lib": [], "site": [], "packag": [], "core": [], "frame": [], "py": [], "8869": [], "datafram": [], "self": [], "level": [], "as_index": [], "sort": [], "group_kei": [], "observ": [], "dropna": 0, "8866": [], "none": [], "8867": [], "rais": [], "typeerror": [], "you": [], "have": [], "suppli": [], "one": [], "dataframegroupbi": [], "8870": [], "obj": [], "8871": [], "kei": [], "8872": [], "8873": [], "8874": [], "8875": [], "8876": [], "8877": [], "8878": [], "8879": [], "1278": [], "__init__": [], "grouper": [], "exclus": [], "select": [], "1275": [], "1277": [], "get_group": [], "1279": [], "1280": [], "1281": [], "1282": [], "1283": [], "1284": [], "no_default": [], "els": 0, "1285": [], "1286": [], "1288": [], "1289": [], "ani": [], "ping": [], "_passed_categor": [], "1009": [], "valid": [], "1007": [], "in_axi": [], "gpr": [], "1008": [], "1010": [], "elif": [], "isinst": [], "1011": [], "1012": [], "gr\u00e1fica": 0, "consistent": 0, "anterior": 0, "durant": 0, "especialment": 0, "1940": 0, "1980": 0, "empiezan": 0, "ver": 0, "siguient": 0, "agrega": 0, "seleccion": 0, "ususario": 0, "comparar": 0, "cualquier": 0, "preferencia": 0, "poseen": 0, "mayor": 0, "corresponden": 0, "2016": 0, "graph_obj": 0, "numpi": 0, "np": 0, "aseg\u00far": 0, "est\u00e9n": 0, "correcto": 0, "c\u00e1lido": 0, "excluyendo": 0, "actual": 0, "current_year": 0, "now": 0, "top_year": 0, "nlargest": 0, "max_valu": 0, "max": 0, "trace": 0, "marker": 0, "circl": 0, "squar": 0, "diamond": 0, "cross": 0, "a\u00f1ad": 0, "i": 0, "enumer": 0, "df_year": 0, "append": 0, "symbol": 0, "len": 0, "size": 0, "selected_year": 0, "df_select": 0, "arang": 0, "hist\u00f3rico": 0, "darkgrei": 0, "list": 0, "rang": 0, "enero": 0, "febrero": 0, "marzo": 0, "abril": 0, "mayo": 0, "junio": 0, "julio": 0, "agosto": 0, "septiembr": 0, "noviembr": 0, "diciembr": 0, "hovermod": 0, "closest": 0, "prueba": 0, "estad\u00edstica": 0, "dickei": 0, "fuller": 0, "plot": 0, "acf": 0, "pacf": 0, "verificar": 0, "si": 0, "estacionaria": 0, "indispens": 0, "construir": 0, "arima": 0, "ya": 0, "supuesto": 0, "fundament": 0, "propiedad": 0, "cambian": 0, "pueden": 0, "obten": 0, "prediccion": 0, "precisa": 0, "statsmodel": 0, "graphic": 0, "tsaplot": 0, "plot_acf": 0, "tsa": 0, "stattool": 0, "adful": 0, "result": 0, "adf_statist": 0, "p_valu": 0, "print": 0, "adf": 0, "p": 0, "09427041182601259": 0, "9500062407464049": 0, "muestran": 0, "tanto": 0, "aplicars": 0, "diferenciaci\u00f3n": 0, "autocorrelaci\u00f3n": 0, "subplot": 0, "make_subplot": 0, "col": 0, "correspondient": [0, 1], "hovertempl": 0, "diff": 0, "necesita": 0, "acf_valu": 0, "nlag": 0, "2080": 0, "fill": 0, "tozeroi": 0, "diff1_valu": 0, "acf_diff1_valu": 0, "diff2_valu": 0, "acf_diff2_valu": 0, "add_annot": 0, "text": 0, "20": 0, "xref": 0, "paper": 0, "yref": 0, "showarrow": 0, "font": 0, "1er": 0, "orden": 0, "15": 0, "66": 0, "2do": 0, "85": 0, "88": 0, "volvi\u00f3": 0, "comprobar": 0, "aplicamo": 0, "nuevament": 0, "aplica": 0, "vez": 0, "elimina": 0, "diff_valu": 0, "697771241158453": 0, "408231089800588e": 0, "28": 0, "dado": 0, "comprueba": 0, "aplicando": 0, "maldonado": 1, "sherin": 1, "menco": 1, "presentan": 1, "resultado": 1, "exploratorio": 1, "asignaci\u00f3n": 1, "curso": 1, "visualizaci\u00f3n": 1, "dato": 1, "python": 1, "y": 1, "r": 1, "dash": 1, "anomal\u00eda": 1, "eda": 1, "tipo": 0, "a\u00fan": 0, "agrupar": 0, "d\u00e9cada": 0, "basada": 0, "condici\u00f3n": 0, "appli": 0, "lambda": 0, "nameerror": [], "18": [], "8": [], "io": 0, "pio": 0, "offlin": 0, "iplot": 0}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"dash": 0, "anomal\u00eda": 0, "de": [0, 1], "temperatura": [0, 1], "manejo": 0, "la": [0, 1], "base": 0, "dato": 0, "an\u00e1lisi": [0, 1], "exploratorio": 0, "eda": 0, "media": 0, "m\u00f3vil": 0, "12": 0, "mese": 0, "mensual": 0, "multianu": 0, "y": 0, "distribuci\u00f3n": 0, "boxplot": 0, "anual": 0, "mapa": 0, "calor": 0, "promedio": 0, "decen": 0, "visualizaci\u00f3n": 0, "m\u00e1ximo": 0, "verificaci\u00f3n": 0, "estacionariedad": 0, "seri": 0, "anomla\u00eda": 1, "en": 1, "superfici": 1, "global": 1}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})