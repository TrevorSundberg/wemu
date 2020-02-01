docker build -t wemu .
mkdir -p out
docker run --rm -v "`pwd`/bin:/out/" wemu
