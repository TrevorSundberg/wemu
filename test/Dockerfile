FROM ubuntu:19.04

RUN apt-get update && apt-get install -y -qq clang llvm binutils

COPY main.c .
COPY compile.sh .

CMD ./compile.sh
