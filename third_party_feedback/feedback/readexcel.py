import xlrd


def read(file,sheet,is_hearder=False):
    data = xlrd.open_workbook(file)

    table = data.sheet_by_name(sheet)

    nrows = table.nrows  

    alldata = []

    for row in range(nrows):
        alldata.append(tuple(table.row_values(row, start_colx=0, end_colx=None)))

    if is_hearder:
        return alldata[1:]
    return alldata


if __name__ == "__main__":
    print(read('./data/questions.xlsx','TTO & TTO-Feedback', True))