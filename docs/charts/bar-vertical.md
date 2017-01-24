# Vertical Bar Chart

<iframe width="100%" height="550" frameborder="0" src="https://embed.plnkr.co/IPhMUjOHEhzncDzxRgRm?show=preview"></iframe>

# Inputs
| Property            | Type     | Default Value | Description                                                                                                     |
|:--------------------|:---------|:--------------|:----------------------------------------------------------------------------------------------------------------|
| view                | number[] |               | the dimensions of the chart [width, height]. If left undefined, the chart will fit to the parent container size |
| results             | object[] |               | the chart data                                                                                                  |
| scheme              | object   |               | the color scheme of the chart                                                                                   |
| schemeType          | string   | 'ordinal'     | the color scale type. Can be either 'ordinal' or 'linear'                                                       |
| customColors        | object   |               | custom colors for the chart. Used to override a color for a specific value                                      |
| legend              | boolean  | false         | show or hide the legend                                                                                         |
| xAxis               | boolean  | false         | show or hide the x axis                                                                                         |
| yAxis               | boolean  | false         | show or hide the y axis                                                                                         |
| showGridLines       | boolean  | true          | show or hide the grid lines                                                                                     |
| showXAxisLabel      | boolean  | false         | show or hide the x axis label                                                                                   |
| showYAxisLabel      | boolean  | false         | show or hide the y axis label                                                                                   |
| xAxisLabel          | string   |               | the x axis label text                                                                                           |
| yAxisLabel          | string   |               | the y axis label text                                                                                           |
| xAxisTickFormatting | function |               | the x axis tick formatting                                                                                      |
| yAxisTickFormatting | function |               | the y axis tick formatting                                                                                      |
| gradient            | boolean  | false         | fill elements with a gradient instead of a solid color                                                          |
| activeEntries       | object[] | []            | elements to highlight                                                                                           |

# Outputs
| Property   | Description                              |
|:-----------|:-----------------------------------------|
| select     | click event                              |
| activate   | element activation event (mouse enter)   |
| deactivate | element deactivation event (mouse leave) |

# Data Format
The data format is single series:

```
[
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  }
]
```