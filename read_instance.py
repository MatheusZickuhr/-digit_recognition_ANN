import numpy as np


def read(file_path):
    with open(file_path) as file:
        xs = []
        ys = []
        for line in file:
            splited_line = line.split(' ')
            xs.append(np.reshape([float(splited_line[i]) for i in range(256)], (-1, 16)))
            ys.append(np.argmax([splited_line[i] for i in range(256, 266)]))

        xs = np.array(xs)
        ys = np.array(ys)

        return (xs[0: int(len(xs) * .8)], ys[0: int(len(ys) * .8)]), (
            xs[int(len(xs) * .8):-1], ys[int(len(ys) * .8): -1])
