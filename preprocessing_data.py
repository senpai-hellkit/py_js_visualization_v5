import os
import pandas as pd
from typing import List


path_to_data: str = os.path.join(os.getcwd(), 'data', 'data.json')
path_to_js_data: str = os.path.join(os.getcwd(), 'static', 'scripts', 'variables.js')
df: pd.DataFrame = pd.read_json(path_to_data)

first_count_data: List[float] = df['first_diagram']['count_data']
second_count_data: List[float] = df['second_diagram']['count_data']
first_years_data: List[int] = df['first_diagram']['years']
second_names_data: List[str] = df['second_diagram']['names']
string_with_vars: str = 'firstCountData = {};\nfirstYearsData = {};\nsecondCountData = {};\nsecondNamesData = {};'
result: str = '\n'.join(['// data gen by python',  string_with_vars, '// end gen data by python'])

with open(path_to_js_data, 'w', encoding='utf') as f_obj:
    f_obj.write(result.format(first_count_data, first_years_data, second_count_data, second_names_data))
