int _start()
{
  int number = 40;
  int n1 = 0;
  int n2 = 1;
  int n3 = 0;
  
  for (int i = 2; i < number; ++i) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
  return 0;
}