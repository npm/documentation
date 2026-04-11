import {flattenHeadings} from '../use-search'

describe('flattenHeadings', () => {
  test('returns empty array for null/undefined input', () => {
    expect(flattenHeadings(null)).toEqual([])
    expect(flattenHeadings(undefined)).toEqual([])
  })

  test('returns empty array for empty items', () => {
    expect(flattenHeadings([])).toEqual([])
  })

  test('flattens single level of headings', () => {
    const items = [{title: 'Description'}, {title: 'Configuration'}]
    expect(flattenHeadings(items)).toEqual(['Description', 'Configuration'])
  })

  test('flattens nested headings', () => {
    const items = [
      {
        title: 'Description',
        items: [{title: 'before'}, {title: 'min-release-age'}],
      },
    ]
    expect(flattenHeadings(items)).toEqual(['Description', 'before', 'min-release-age'])
  })

  test('flattens deeply nested headings', () => {
    const items = [
      {
        title: 'Top',
        items: [
          {
            title: 'Mid',
            items: [{title: 'Deep'}],
          },
        ],
      },
    ]
    expect(flattenHeadings(items)).toEqual(['Top', 'Mid', 'Deep'])
  })

  test('skips items without a title', () => {
    const items = [{items: [{title: 'child'}]}, {title: 'sibling'}]
    expect(flattenHeadings(items)).toEqual(['child', 'sibling'])
  })
})
