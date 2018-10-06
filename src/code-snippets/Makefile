SRCS = $(wildcard *.js)          # select all .C files as source
OBJS = $(patsubst %.js,%.html,$(SRCS))   # list the corresponding object files

all: $(OBJS) highlight-styles.css
	touch all
%.html: %.js
	pygmentize -f html -l javascript -o $@ $<

highlight-styles.css:
	pygmentize -f html -S manni > highlight-styles.css
