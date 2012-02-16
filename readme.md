# jQuery Hint Extension

Displays a "watermark" hint on HTML input forms when no value is present.

Also overrides jQuery's .val() operator to filter out any hint text; this help with validation plugins, for example.

### Usage

Use like this:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="https://raw.github.com/tylerl/jquery-hint/master/jquery.hint.js"></script>
<script>
$(function() {
	$("input[hint]").hint();
	$("#zzz").hint({text:"Explicitly set hint text"});
	});
</script>

<style>
	input.hint {
		color:#AAA;
	}
</style>

<input hint="Your message here"><br/>
<input hint="Another Message"><br/>
<input id="zzz"><br/>
```

### Options

Accepts the following options:

  * `classon` *(default `hint`)* -- The class to apply when a hint is present.
  * `classoff` *(default unset)* -- The class to apply when a hint is not present.
  * `attr` *(default `hint`)* -- The HTML attribute from which to retrieve the hint text for this element.
  * `text` *(default unset)* -- Explicitly set hint text. Overrides the `attr` option.

