#!/usr/bin/env python3
''' helper function that takes two integer arguments. '''

from typing import Tuple


def index_range(int: page, int: page_size) -> Tuple[int, int]:
    ''' Return a tuple containing a start index and end index. '''

    return (page * page_size - page_size, page * page_size)
