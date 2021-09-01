# Internet Explorer Deprecation Warning

A simple warning banner to display to the user that their browser needs to be updated.

#### Supports later IE versions

Up to IE9, conditional statements (`<!--[if IE]>...<![endif]-->`) could be used in HTML however support for this was dropped in IE10 and 11.
A lot of similar solutions use conditional statements and do not target IE10 and IE11.

_Currently only tested on IE8-IE11_

## Usage

Simply insert the script before the closing body tag in your html.

```
.... your html page ....
<script  src="iewarn.js"></script>
</body>
```
