JS_SRCS = $(wildcard *.js)
JS_OBJS = $(patsubst %.js,%.html,$(JS_SRCS))
PY_SRCS = $(wildcard *.py)
PY_OBJS = $(patsubst %.py,%.html,$(PY_SRCS))

all: $(JS_OBJS) $(PY_OBJS) highlight-styles.css
	touch all
%.html: %.js
	pygmentize -f html -l javascript -o $@ $<

%.html: %.py
	pygmentize -f html -l python -o $@ $<

highlight-styles.css:
	pygmentize -f html -S manni > highlight-styles.css
