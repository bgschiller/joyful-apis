JS_SRCS = $(wildcard *.js)
JS_OBJS = $(patsubst %.js,%.html,$(JS_SRCS))
PY_SRCS = $(wildcard *.py)
PY_OBJS = $(patsubst %.py,%.html,$(PY_SRCS))
HTML_SRCS = $(wildcard *.source.html)
HTML_OBJS = $(patsubst %.source.html,%.html,$(HTML_SRCS))

all: $(JS_OBJS) $(PY_OBJS) $(HTML_OBJS) highlight-styles.css
	touch all
%.html: %.js
	pygmentize -f html -l javascript -o $@ $<

%.html: %.py
	pygmentize -f html -l python -o $@ $<

%.html: %.source.html
	pygmentize -f html -l html -o $@ $<

highlight-styles.css:
	pygmentize -f html -S manni > highlight-styles.css
